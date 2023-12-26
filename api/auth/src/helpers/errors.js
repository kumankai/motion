/*
MODULE contains error handlers
*/

const credentialCheck = (err) => {
    let error = err.message; //Incorrect credentials

    if (err.code == 11000) {
        error = 'Username already exists';
    };

    return error;
}

module.exports = { credentialCheck };