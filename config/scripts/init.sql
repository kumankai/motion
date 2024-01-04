USE Accounts;

CREATE TABLE IF NOT EXISTS Users (
    UserID VARCHAR(255) NOT NULL,
    Username VARCHAR(25),
    Password VARCHAR(255),
    UNIQUE (UserID),
    PRIMARY KEY (UserID)
);

CREATE TABLE IF NOT EXISTS Cards (
    CardID VARCHAR(255) NOT NULL,
    UserID VARCHAR(255) NOT NULL,
    Balance DOUBLE(10, 2),
    UNIQUE (CardID),
    PRIMARY KEY (CardID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

CREATE TABLE IF NOT EXISTS Transactions(
    TransID VARCHAR(255) NOT NULL,
    CardID VARCHAR(255) NOT NULL,
    Name VARCHAR(50),
    Value DOUBLE(10, 2),
    Date DATETIME,
    UNIQUE (TransID),
    PRIMARY KEY (TransID),
    FOREIGN KEY (CardID) REFERENCES Cards(CardID)
);

CREATE TABLE IF NOT EXISTS Incomes(
    IncomeID VARCHAR(255) NOT NULL,
    CardID VARCHAR(255) NOT NULL,
    Weekly DOUBLE(10, 2),
    Monthly DOUBLE(10, 2),
    Annual DOUBLE(10, 2),
    UNIQUE (IncomeID),
    PRIMARY KEY (IncomeID),
    FOREIGN KEY (CardID) REFERENCES Cards(CardID)
);

CREATE TABLE IF NOT EXISTS Expenses(
    ExpenseID VARCHAR(255) NOT NULL,
    CardID VARCHAR(255) NOT NULL,
    Weekly DOUBLE(10, 2),
    Monthly DOUBLE(10, 2),
    Annual DOUBLE(10, 2),
    UNIQUE (ExpenseID),
    PRIMARY KEY (ExpenseID),
    FOREIGN KEY (CardID) REFERENCES Cards(CardID)
);

CREATE DATABASE IF NOT EXISTS Tokens;

USE Tokens;

CREATE TABLE IF NOT EXISTS RefreshTokens(
    UserID VARCHAR(255) NOT NULL,
    RefreshToken VARCHAR(255),
    UNIQUE (RefreshToken),
    UNIQUE (UserID),
    PRIMARY KEY (UserID)
)