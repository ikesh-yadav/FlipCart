const express = require("express");
const router = express.Router();

//import models
const User = require("../models/users");

//get code for users
router.get("/:id?", (req, res) => {
    if (req.params.id ){
        User.find({_id:req.params.id},(err, users ) => {
            res.json(users);
        });
    }else {
        User.find((err, users ) => {
            res.json(users);
        });
    }
    //res.send(content);
});
//post code for users
router.post("/", (req, res) => {
    // if (req.body.name){
        content="Hello "+req.body.name;
    // }else {
    //     content = "<h2>api home from post</h2";
    // }
    res.send(content);
})

module.exports = router;