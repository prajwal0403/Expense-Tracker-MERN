const mongoose = require('mongoose');
require('dotenv').config();
const dbURL = process.env.dbURL;

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on('error', (err) => console.log(err));

connection.on('connected', () =>
  console.log('Mongo DB Connection Successfull')
);
