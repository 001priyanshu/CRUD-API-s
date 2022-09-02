const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.DATABASE);


const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connexting to mongoDB"))

db.once('open',function(){
    console.log("Connected to Database:: MongoDB");
});

module.exports = db;