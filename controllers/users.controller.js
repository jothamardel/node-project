const UserSchema = require('../model/user.model');

async function handleUsers(req, res) {

  try {

    const users = await UserSchema.find();
    
    res.status(200).json({
      message: "Successful!",
      success: true,
      data: users,
      statusCode: 200
    });
    
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Unable to get all users",
      success: false,
      statusCode: 400
    })
  }



}


module.exports = {
  handleUsers
}