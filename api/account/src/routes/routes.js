/*
Contains account API routes
*/

const express = require('express');

const userActions = require('../controllers/account-actions');

const router = express.Router();

// **GET** / and /main
// - Read all User data from MySQL
// - send to client

// **POST** /changepassword
// body = {
//     userID
//     newPassword
// }
// - Update in Account DB using userID
// - Verify success to client

// **POST** /deleteaccount
// body = {
//     userID
//     password
// }
// - Validate password
// - Delete User in RefreshTokens DB
// - Delete User in Accounts DB
// - Delete User in mongoDB
// - Verify success to client

// **POST** /addcard
// body = {
//     userID
// }
// - Save in Accounts DB
// - Return cardID

// **POST** /addincome
// body = {
//     userID
//     cardID
//     value
// }
// - Save in Accounts DB
// - Return incomeID

// **POST** /addexpense
// body = {
//     userID
//     cardID
//     value
// }
// - Save in Accounts DB
// - Return expenseID

// **POST** /addhistory
// body = {
//     userID
//     cardID
//     value
// }
// - Insert in Accounts DB
// - Return transID

// **PUT** /editincome
// body = {
//     userID
//     cardID
//     incomeID
//     {
//         attribute
//         value
//     }
// }
// Possible attritbutes: "name", "amount", "datetime"
// - Update Accounts DB
// - Verify success

// **PUT** /editexpense
// body = {
//     userID
//     cardID
//     expenseID
//     {
//         attribute
//         value
//     }
// }
// Possible attritbutes: "name", "amount", "datetime"
// - Update Accounts DB
// - Verify success

// **PUT** /edithistory
// body = {
//     userID
//     cardID
//     transID
//     {
//         attribute
//         value
//     }
// }
// Possible attritbutes: "name", "amount", "datetime"
// - Update Accounts DB
// - Verify success

// **POST** /deleteincome
// body = {
//     userID,
//     cardID,
//     incomeID
// }
// - Delete in Accounts DB
// - Verify success

// **POST** /deleteexpense
// body = {
//     userID,
//     cardID,
//     expenseID
// }
// - Delete in Accounts DB
// - Verify success

// **POST** /deletehistory
// body = {
//     userID,
//     cardID,
//     transID
// }
// - Delete in Accounts DB
// - Verify success

// **POST** /deletecard
// body = {
//     userID
//     cardID
// }
// - Delete in Accounts DB
// - Verify success


module.exports = router;