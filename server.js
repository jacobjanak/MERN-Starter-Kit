// dependencies
const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// server
const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// db
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mern';
mongoose.connect(MONGODB_URI);
const db = require('./models/');

// use build folder if this code is running on Heroku
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
  })
}

// routing
app.post('/user', (req, res) => {
  db.User.create(req.body, (err, data) => {
    res.json(data)
  })
})

app.listen(PORT, () => {
  console.log('#############################################')
  console.log('To run the whole application use: npm run dev')
  console.log('#############################################')
})
