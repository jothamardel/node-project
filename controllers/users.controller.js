const {getAllUsers } = require('../model/database');

function handleUsers(req, res) {
  res.status(200).json({
    message: "Successful!",
    success: true,
    data: [...getAllUsers()],
    statusCode: 200
  });
}


module.exports = {
  handleUsers
}