const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname : {
        type : String,
        required : true 
    },
    sname : {
        type : String,
        required : true
    },
    birth : {
        type : Date,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true,
        minLength : 6
    }
})

const User = mongoose.model('user', userSchema);

module.export = User;