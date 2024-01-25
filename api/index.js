const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');

const app = express();

app.use(cors());

app.use(express.json());

require('dotenv').config();
const password = process.env.DB_PASSWORD;


//Connecting RegisterPage.js to the database
mongoose.connect('mongodb+srv://blog:Sbuda.211@cluster0.4motcbu.mongodb.net/mern-blog?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
})


app.post('/register', (req, res) => {
  const { username, password } = req.body;
  res.json({requestData:{username,password}});
});

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
  console.log(`Server is running on port 4002`);
});
//Sbuda.211
//mongodb+srv://blog:Sbuda.211@cluster0.4motcbu.mongodb.net/?retryWrites=true&w=majority
