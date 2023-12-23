require('dotenv').config();
const express = require('express');
const accountRoutes = require('./src/routes/routes');

const app = express();
const PORT = 5001;

app.use(express.json());

app.use(accountRoutes)

app.listen(PORT);