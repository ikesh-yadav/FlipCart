const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            if(err) {
                res.status(501).json({message:err});
            }else {
                // Store hash in your password DB.
                let newPassword = new Passwords({
                    email:req.body.email,
                    password:hash 
                });
                newPassword.save((err, result) => {
                    if(err) {
                        res.status(501).json({message:err});
                    }else {
                        res.status(201).json({message:"password addded succesfully"});
                    }
                });
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
        let checkDocument ={"email":htmlBody.email};
    
        Passwords.findOne(checkDocument, (err, result) => {
            if(err) {
                res.status(501).json({message:err});
            }else {
                if(hash = result['password']){
                    bcrypt.compare(htmlBody.password, hash, function(err, compareResult) {
                        // result == true
                        if(err) {
                            res.status(501).json({message:err});
                        }else {
                            if(compareResult == true){
                                res.status(201).json({ message:"login successful"});
                            }else{
                                res.status(501).json({message:"login unsuccesfull"});
                            }
                        }
                    });
                    // res.json(result);
                }else{
                    // res.json(result);
                    res.status(501).json({message:"paassword not found in database"});
                }
            }
        });
    }else {
        res.status(501).send({message:"Not enough information to check Password"});
    }
});

//delete code fonewPassword
router.delete("/delete", (req, res ) => {
    if(req.body.email) {
        Passwords.deleteOne({email:req.body.email}, (err, result) => {
            if(err){
                res.status(501).json({message:err});
            }else{
                if(result["n"] == 0) {
                    res.status(501).json({ message:"unable to delete passwprd record"});
                }else {
                    res.status(201).json({ message:"password record deleted"});
                }
            }
        });
    }else {
        res.status(501).json({ message:"email not included in html body"});
    }

});

//update code fonewPassword
router.post("/update", (req,res) => {
    htmlBody = req.body;
    if(htmlBody.email && htmlBody.password){
        update = {};
        bcrypt.hash(htmlBody.password, saltRounds, (err, hash) => {
            if(err) {
                res.status(501).json({message:err});
            }else {
                // update hash in your password DB.
                update["password"] = hash;

                Passwords.findOneAndUpdate(
                    {email:htmlBody.email},
                    update,        
                    (err, result) => {
                        if(err) res.status(501).json({message:err});
                        else{
                            // res.json(result);
                            if(result["n"] == 0) {
                                res.status(501).send({message:"Update unsuccesfull"});
                            }else {
                                res.status(501).send({message:"Password updated"});
                            }
                        }
                });
                newPassword.save((err, result) => {
                    if(err) {
                        res.status(501).json({message:err});
                    }else {
                        res.status(201).json({message:"password addded succesfully"});
                    }
                });
            }
        });        
    }else {
        res.status(501).send({message:"email or password not included in htmlbody"});
    }
});


module.exports = router;