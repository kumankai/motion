require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./src/routes/routes');
const { rotate } = require('./src/controllers/rotate-tokens');

const app = express();
const PORT = 5001;

app.use(express.json());

mongoose.connect(process.env.MDB_URL)
.then((result) => {
    console.log(`API listening on port ${PORT}`);
    rotate('* * * * *');
    app.listen(PORT);
})
.catch((err) => console.log(err));

app.use(authRoutes);