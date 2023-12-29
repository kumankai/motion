/**
 * MODULE contains functions that help with authentication
 */

const createToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 3*24*60*60 //Three days
    })
}

const hashpwd = async (password) => {
    const salt = await bcrypt.genSalt();
    const hashedpwd = await bcrypt.hash(password, salt);
    return hashedpwd;
}

module.exports = { createToken, hashpwd };