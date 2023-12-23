require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./src/routes/routes');

const app = express();
const PORT = 5000;

app.use(express.json());


mongoose.connect(process.env.MDB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then((result) => app.listen(PORT))
.catch((err) => console.log(err));

app.use(authRoutes);