let users = [];

function addUser(user) {
    users.push(user)  // Missing validation
}

function getUser(id) {
    return users.find(u => u.id = id) // Bug: should be '==='
}

module.exports = { addUser, getUser };
