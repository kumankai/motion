/*
MODULE contains authentication actions
*/
const mongoUser = require('../models/mongo-User');
const mysqlUser = require('../models/mysql-User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const handle = require('../helpers/errors');
const db = require('../database/mysql');
const { Model } = require('objection');

Model.knex(db);

const createToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 3*24*60*60 //Three days
    })
}

const hashpwd = async (password) => {
    const salt = await bcrypt.genSalt();
    const hashedpwd = await bcrypt.hash(password, salt);
    return hashedpwd;
}

const signup = async (req, res) => {
    const { username, password } = req.body;

    try{
        const hashedpwd = await hashpwd(password);
        
        //Saves the user in DB
        const user = await mongoUser.create({ username: username, password: hashedpwd });
        const userID = user._id.toString();
        await mysqlUser.query().insert({
            userID: userID,
            username: username,
            password: hashedpwd
        });

        const token = createToken(userID);

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
        const token = createToken({ user: user._id });

        res.status(200).json({ user: user._id, access_token: token });
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