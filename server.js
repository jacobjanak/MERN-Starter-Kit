const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern';
mongoose.connect(MONGODB_URI);
const db = require('./models/');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
  })
}

app.post('/user', (req, res) => {
  db.User.create(req.body, (newUser) => {
    res.json(newUser)
  })
})

app.listen(PORT)
