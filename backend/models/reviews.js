const mongoose =require("mongoose");

const ReviewScheme = mongoose.Schema({
    _id:{
        type:Number,
        required:false
    },
    user_id:{
        type:Number,
        required:true
    },
    product_id:{
        type:Number,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    stars:{
        type:Number,
        required:true
    }


});

const reviews = module.exports = mongoose.model("reviews", ReviewScheme);