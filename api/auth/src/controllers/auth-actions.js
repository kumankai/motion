/*
MODULE contains authentication actions
*/
const mongoUser = require('../models/mongo-User');
const mysqlUser = require('../models/accounts-User');
const tokenUser = require('../models/tokens-User');
const auth = require('../helpers/authenticate');
const handle = require('../helpers/errors');
const maindb = require('../database/users');
const authdb = require('../database/tokens');
const { Model } = require('objection');

const signup = async (req, res) => {
    const { username, password } = req.body;

    try{
        const hashedpwd = await auth.hashpwd(password);
        
        // MongoDB
        const user = await mongoUser.create({ username: username, password: hashedpwd });
        const userID = user._id.toString();

        // Main DB
        Model.knex(maindb);
        await mysqlUser.register({
            userID: userID,
            username: username,
            password: hashedpwd
        });

        // Refresh token DB
        Model.knex(authdb);
        const token = auth.createToken(userID);
        const refreshToken = auth.createRefreshToken(userID);
        await tokenUser.register({ userID, refreshToken });

        res.status(201).json({ user: userID, access_token: token });
    }
    catch (err) {
        const error = handle.credentialCheck(err);
        console.log(error);
        res.status(400).json({ error });
    }
}

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await mongoUser.login(username, password);
        const userID = user._id.toString();
        const token = auth.createToken(userID);

        res.status(200).json({ user: userID, access_token: token });
    }
    catch (err) {
        const error = handle.credentialCheck(err);
        console.log(error);
        res.status(400).json({ error });
    }
}

const logout = (req, res) => {
    
}

const refresh = async (req, res) => {
    
}

module.exports = { signup, login, logout, refresh };