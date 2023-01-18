const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://prajwal:prajwal0403@banking.3hga9.mongodb.net/Money' , {useNewUrlParser : true , useUnifiedTopology : true})

const connection = mongoose.connection

connection.on('error', err => console.log(err))

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))