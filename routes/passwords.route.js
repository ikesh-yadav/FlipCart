const express = require("express");
const router = express.Router();

//import models
const Passwords = require("../models/passwords.model");

//dummy get code for passwords
router.get("/", (req, res) => {
    res.send("dummy get");
});

//post code for adding user Passwords
router.post("/", (req, res) => {
    htmlBody = req.body;
    if ( htmlBody.email && htmlBody.password ){
        let newPassword = new Passwords({
            email:req.body.email,
            password:req.body.password,    
        });

        newPassword.save((err, result) => {
            if(err) {
                res.status(501).json({message:err});
            }else {
                res.status(201).json({message:"Contact addded succesfully"});
            }
        });
    }else {
        res.status(501).send({message:"Not enough information to add new Password"});
    }
});

//post code for checking user Passwords
router.post("/check", (req, res) => {
    htmlBody = req.body;
    if(htmlBody.email && htmlBody.password){
        let checkDocument ={"email":htmlBody.email, "password":htmlBody.password};
    
        Passwords.findOne(checkDocument).countDocuments((err, result) => {
            if(err) {
                res.status(501).json({message:err});
            }else {
                if(result == 1){
                    // res.json(result);
                    res.status(201).json({ message:"login successful"});
                }else{
                    // res.json(result);
                    res.status(501).json({message:"login unsuccesfull"});
                }
            }
        });
    }else {
        res.status(501).send({message:"Not enough information to check Password"});
    }
});

//delete code fonewPassword
router.delete("/delete", (req, res ) => {
    if(req.body.id) {
        Passwords.deleteOne({_id:req.body.id}, (err, result) => {
            if(err){
                res.send("Error deletinewPassword:"+err);
            }else{
                if(result["n"] == 0) {
                    res.send("newPassword doesnt exist or wromg id");
                }else {
                    res.send("Password deleted succesfully");
                }
            }
        });
    }else {
        res.send("id not included in htmlbody");
    }

});

//update code fonewPassword
router.post("/update", (req,res) => {
    htmlBody = req.body;
    if(htmlBody.email){
        update = {};
        if (htmlBody.hash){
            update["hash"] = htmlBody.hash;
        }
        
        Passwords.findOneAndUpdate(
            {email:htmlBody.email},
            update,        
            (err, result) => {
            if(err) res.send(err);
            else{
                // res.json(result);
                if(result["n"] == 0) {
                    res.send("Update unsuccesfull");
                }else {
                    res.send("Password updated");
                }
            }
        });
    }else {
        res.send("email not included in htmlbody");
    }
});


module.exports = router;