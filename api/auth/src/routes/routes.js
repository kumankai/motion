/*
Contains auth API routes
*/

const express = require('express');

const authActions = require('../controllers/auth-actions');

const router = express.Router();

router.post('/signup', authActions.signup);

router.post('/login', authActions.login);

router.post('/logout', authActions.logout);

router.post('/regenerate-token', () => {});

module.exports = router;