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
            },
        },
        required:false
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
        required:false,
        default:"customer"
    },
    email:{
        type:String,
        required:false
    }
});

const users = module.exports = mongoose.model("users",UserSchema);