const express = require('express');
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

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})



// POST /login
// POST /register
// PUT /profile