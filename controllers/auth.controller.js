const { getAllUsers, addToUsers} = require('../model/database');

const UserSchema = require('../model/user.model');

const db = [...getAllUsers()]

function handleLoginUser(req, res) {
  console.log(req.body)
  const data = {...req.body}

  if (!data.email || !data.password) {
    res.status(400).json({ message: "Invalid credentials (missing property)"});
    return;
  }

  // check if the user details is valid
  for(let i = 0; i < db.length; i++) {
    if ((db[i].email === data.email) && (db[i].password === data.password)) {
      res.status(200).json({
        message: 'Login successful!',
        data: {...db[i]}
      })
      return;
    }
  }

  res.status(400).json({
    message: 'Login unsuccessful!'
  })

}


async function handleRegisterUser(req, res) {
  const data = {...req.body}

  try {
    //creating a new user (Create)
    const newUser = new UserSchema(data); //Instantiating class
    const userData = await newUser.save(); // Saves to the users collectn
    res.status(201).json({
      message: 'Registration successful!',
      data: userData,
      success: true,
      statusCode: 201
    });
    return;
  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: 'Something went wrong!',
      success: false,
      statusCode: 400,
      error: error.message
    })
    
  }

}

function handleForgotPassword(req, res) {

}

module.exports = {
  handleLoginUser,
  handleRegisterUser,
  handleForgotPassword
}