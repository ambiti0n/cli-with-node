const mongoose = require('mongoose');

//customer schema
const customerSchema = mongoose.Schema({
   firstname :{type : String},
   lasttname :{type : String},
   phone :{type : String},
   email :{type : String},
});

// define and export 
module.exports = mongoose.model('Customer', customerSchema);