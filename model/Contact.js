var mongoose = require('mongoose')
 
const Contact = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});
 
module.exports = mongoose.model('Products', Contact)