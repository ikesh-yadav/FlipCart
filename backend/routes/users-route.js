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
    htmlBody = req.body;
    if (htmlBody.name && htmlBody.phone_no){
        newUser = new User({
            name:htmlBody.name,
            phone_no:htmlBody.phone_no
        });
        newUser.save((err) => {
            if(err) {
                res.send("Error saving user:"+err);
            }else {
                res.send("User saved succesfully");
            }
        });
    }else {
        res.send("Not enough data to add user");
    }
});

module.exports = router;