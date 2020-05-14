const mongoose =require("mongoose");

const PasswordScheme = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    salt:{
        type:String,
        required:true
    },
    hash:{
        type:String,
        required:true
    }


});

const passwords = module.exports = mongoose.model("passwords", PasswordScheme);