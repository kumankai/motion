/**
 * MODULE contains functions that help with authentication
 */
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 3*24*60*60 // Three days
    })
}

const createRefreshToken = (id) => {
    return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: 30*24*60*60 // Thirty Days
    })
}

const hashpwd = async (password) => {
    const salt = await bcrypt.genSalt();
    const hashedpwd = await bcrypt.hash(password, salt);
    return hashedpwd;
}

module.exports = { createToken, createRefreshToken, hashpwd };