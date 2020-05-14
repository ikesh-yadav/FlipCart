const express = require("express");
const router = express.Router();

//import models
const Passwords = require("../models/passwords.model");

//post code for adding user Passwords
router.post("/", (req, res) => {
    htmlBody = req.body;
    if (htmlBody.email && htmlBody.hash && htmlBody.salt){
        let newPassword = new Passwords({
            email:req.body.email,
            salt:req.body.salt,
            hash:req.body.hash,    
        });
        newPassword.save((err, result) => {
            if(err) {
                res.json({status:"failed",msg:err});
            }else {
                res.json({status:"sucess", msg:"Contact addded succesfully"});
            }
        });
    }else {
        res.send("Not enough information to add new Password");
    }
});

//post code for checking user Passwords
router.post("/check", (req, res) => {
    htmlBody = req.body;
    if(htmlBody.email && htmlBody.hash){
        let checkDocument ={"email":htmlBody.email, "hash":htmlBody.hash};
    
        Passwords.findOne(checkDocument).count((err, result) => {
            if(err) {
                res.json({status:"error:",msg:err});
            }else {
                if(result['n'] == 1){
                    res.json({status:"success", msg:"login successful"});
                }else{
                    res.json({status:"failed", msg:"login unsuccesfull"});
                }
            }
        });
    }else {
        res.send("Not enough information to check Password");
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