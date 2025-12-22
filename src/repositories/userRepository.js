const users = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" }
];

function findById(id) {
  return users.find(u => u.id === id);
}

module.exports = { findById };
