const { addUser, getUser } = require('../repo/userRepo');

function registerUser(user) {
    addUser(user);  // No error handling
}

function findUser(id) {
    return getUser(id);
}

module.exports = { registerUser, findUser };
