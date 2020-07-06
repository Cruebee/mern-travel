const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const app = express();

// BodyParser Middleware
app.use(express.json());

// Connect to MongoDB (local testing)
// must switch back and fourth between localhost testing and heroku hosting which uses a secure way to transfer passwords

const db = require('../config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


// Connect to MongoDB with Heroku hosting
// Comment out to switch back to local host testing (Note uuid is no longer in use when in testing.)
/*
mongoose
  .connect(process.env.CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
*/

//Use Routes
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder

  app.use(express.static('client/build'));
  // implement "/client" directory (linking app to host on Heroku)
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

