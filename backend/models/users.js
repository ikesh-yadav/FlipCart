const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    _id:{
        type:mongoose.Types.ObjectId,
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
        type:{country_code:String,number:Number},
        required:true
    },
    cart:{
        type:[Number],
        required:false
    },
    wishlist:{
        type:[Number],
        required:false
    },
    recently_viewed:{
        type:[Number],
        required:false
    },
    addresses:{
        type:[{line_1:String,line_2:String}],
        required:false
    },
    access:{
        type:String,
        required:false
    }
});

const users = module.exports = mongoose.model("users",UserSchema);