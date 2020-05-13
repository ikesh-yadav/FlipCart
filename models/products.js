const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:[{type:String}],
        required:true
    },
    highlights:{
        type:[{type:String}],
        required:false
    },
    full_details:{
        type:String,
        required:false
    },
    sold_by:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});

const products = module.exports = mongoose.model("products",ProductSchema);