const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    _id:{
        type:Number,
        required:true 
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    phone_no:{
        type:[{type:String,type:Number}],
        required:true
    },
    cart:{
        type:[{type:Number}],
        required:false
    },
    wishlist:{
        type:[{type:Number}],
        required:false
    },
    recently_viewed:{
        type:[{type:Number}],
        required:false
    },
    addresses:{
        type:[{type:String}],
        required:false
    },
    access:{
        type:String,
        required:false
    }
});

const users = module.exports = mongoose.model("users",UserSchema);