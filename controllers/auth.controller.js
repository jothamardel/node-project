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
  // check if fields are empty
  const data = {...req.body}
  if (!data.fullName || !data.email || !data.phone || !data.gender || !data.password) {
    res.status(400).json({
      message: 'All fields are required',
      success: false,
      statusCode: 400
    })
  }

// check if account exist
  const isValid = db.find(item => {
    if(item.phone === data.phone || item.email === data.email) {
      return item;
    }
  });

  try {
    
    const newUser = new UserSchema(data);
    const userData = await newUser.save();
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
      message: 'User already exist, proceed to login',
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