const { registerUser, findUser } = require('../service/userService');

function createUser(req, res) {
    registerUser(req.body); // Not checking req.body at all
    res.send("User created"); // No status codes
}

function getUserById(req, res) {
    const user = findUser(req.params.id);
    res.send(user); // Could send undefined
}

module.exports = { createUser, getUserById };
