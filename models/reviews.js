const mongoose =require("mongoose");

const ReviewScheme = mongoose.Schema({
    user_id:{
        type:Number,
        required:true
    },
    product_id:{
        type:Number,
        required:true
    },
    review:{
        type:{title:String, description:String},
        required:false
    },
    stars:{
        type:Number,
        required:true
    }


});

const reviews = module.exports = mongoose.model("reviews", ReviewScheme);