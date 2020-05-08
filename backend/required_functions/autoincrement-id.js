//import models
let Counters = require("../models/counters");


function getNextSequenceValue(sequenceName){

    Counters.find((err, temp ) => {
        return temp;
    });
    
    // let sequenceDocument = Counters.findByIdAndUpdate({
    //    query:{_id: sequenceName },
    //    update: {$inc:{sequence_value:1}},
    //    new:true
    // });
    
 }

 console.log(getNextSequenceValue("users"));