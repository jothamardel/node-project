const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const AuthRoute = require('./routes/auth.route');
const UserRoute = require('./routes/users.route');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get('/', (req, res) => {
  res.send("Hello world");
}); 

app.use('/auth', AuthRoute);
app.use('/api', UserRoute);


mongoose.connect('mongodb://localhost:27017/attendanceDB')
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  })
})
.catch(err => {
  console.error(new Error(err));
});



// POST /login
// POST /register
// PUT /profile