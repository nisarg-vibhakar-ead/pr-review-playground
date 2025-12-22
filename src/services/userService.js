const userRepository = require("../repositories/userRepository");

async function getUserById(id) {
  return userRepository.findById(id);
}

module.exports = { getUserById };
