/*
MODULE contains authentication actions
*/
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const handle = require('../helpers/errors');

const createToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 3*24*60*60 //Three days
    })
}

const signup = async (req, res) => {
    const { username, password } = req.body;

    try{
        //Saves the user in DB
        const user = await User.create({ username, password });
        const token = createToken(user._id);

        res.status(201).json({ user: user._id, access_token: token });
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
        const user = await User.login(username, password);
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