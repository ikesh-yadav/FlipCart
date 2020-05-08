const mongoose =require("mongoose");

const ReviewScheme = mongoose.Schema({
    _id:{
        type:mongoose.Types.ObjectId,
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
        required:false
    },
    stars:{
        type:Number,
        required:true
    }


});

const reviews = module.exports = mongoose.model("reviews", ReviewScheme);