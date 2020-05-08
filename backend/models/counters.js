const mongoose =require("mongoose");

const CountersScheme = mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    sequence_value:{
        type:Number,
        required:true
    }
});


const counters = module.exports = mongoose.model("counters", CountersScheme);