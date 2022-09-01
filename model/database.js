const db = [
  {
    email: "john@gmail.com",
    password: '12345'
  },
  {
    email: "peter@gmail.com",
    password: "apples"
  },
  {
    email: "sarah@gmail.com",
    password: "banana"
  },
]

function getAllUsers() {
  return db;
}

function addToUsers(data) {
  db.push(data);
}


module.exports = {
  getAllUsers,
  addToUsers
}