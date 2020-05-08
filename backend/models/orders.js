const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    _id:{
        type:Number,
        required:true 
    },
    items:{
        type:[{type:Number}],
        required:true
    },
    user_id:{
        type:Number,
        required:true
    },
    delivery_address:{
        type:String,
        required:false
    },
    status:{
        type:String,
        required:false
    },
    order_date:{
        type:Date,
        required:false
    },
    delivery_date:{
        type:Date,
        required:false
    }
});

const products = module.exports = mongoose.model("orders",OrderSchema);