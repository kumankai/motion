const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, 'Please enter a username'],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 8 characters'],
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;