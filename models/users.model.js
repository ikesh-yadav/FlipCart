const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name:{
        type:{
            first:{
                type:String,
                required:true
            },
            last:{
                type:String,
                required:true
            }
        },
        required:false
    },
    phone_no:{
        type:{country_code:String,number:Number},
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:false,
        unique:true
    },
    cart:{
        type:[String],
        required:false
    },
    wishlist:{
        type:[String],
        required:false
    },
    recently_viewed:{
        type:[String],
        required:false
    },
    addresses:{
        type:[{line_1:String,line_2:String}],
        required:false
    },
    access:{
        type:String,
        required:false,
        default:"customer"
    }
});

const users = module.exports = mongoose.model("users",UserSchema);