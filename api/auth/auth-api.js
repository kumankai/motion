require("dotenv").config();
const express = require('express');
const authRoutes = require('./src/routes/routes');
const app = express();
const PORT = 4000;

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(authRoutes);

app.use((err, req, res, next) => {
    let code = 500;
    let message = "Something went wrong";

    if (err.code) {
        code = err.code;
    }
    if (err.message) {
        message = err.message;
    }

    res.status(code).json({ message: message });
})

app.listen(PORT, () => {
    console.log(`Auth API listening on port ${PORT}`);
});