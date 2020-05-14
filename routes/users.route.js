const express = require("express");
const router = express.Router();

//import models
const Users = require("../models/users.model");

//get code for retriving one user with matching id or all users
router.get("/:id?", (req, res) => {
    if (req.params.id ){
        Users.findOne({_id:req.params.id},(err, users ) => {
            if(err){
                res.status(501).send({message:err});
            }else{
                res.status(201).json(users);
            }
        });
    }else {
        Users.find((err, users ) => {
            if(err){
                res.status(501).send({message:err});
            }else{
                res.status(201).json(users);
            }
        });
    }
});
//get code for retriving one user with matching id or all users
router.get("/email/:email", (req, res) => {
    if ( req.params.email ){
        Users.findOne({email:req.params.email},(err, users ) => {
            if(err){
                res.status(501).send({message:err});
            }else{
                res.status(201).json(users);
            }
        });
    }else {
        res.status(501).json({ message:"email not included in html body"});
    }
});
//post code for adding users
router.post("/", (req, res) => {
    htmlBody = req.body;
    if (htmlBody.first && htmlBody.last && htmlBody.email){
        newUser = new Users({
            first:htmlBody.first,
            last:htmlBody.last,
            email:htmlBody.email
            //phone_no:htmlBody.phone_no
        });
        newUser.save((err, result) => {
            if(err) {
                res.status(501).json({message:err});
            }else {
                res.status(201).json({message:"user addded succesfully"});
            }
        });
    }else {
        return res.status(501).json({message: 'Error registering user, not enough data'});
    }
});

//code for deleting a user
router.delete("/delete", (req, res) => {
    if(req.body.email) {
        Users.deleteOne({email:req.body.email}, (err, result) => {
            if(err){
                res.status(501).json({message:err});
            }else{
                if(result["n"] == 0) {
                    res.status(501).json({ message:"Users doesnt exist or wromg id"});
                }else {
                    res.status(201).json({ message:"Users deleted succesfully"});                    
                }
            }
        });
    }else {
        res.status(501).json({ message:"email not included in html body"});
    }
});

//code to update user data
router.post("/update", (req,res) => {
    htmlBody = req.body;
    if(htmlBody.id){
        update = {}
        if (htmlBody.name) {
            update.name = htmlBody.name;
        }
        if (htmlBody.phone_no) {
            update.phone_no = htmlBody.phone_no;
        }
        if (htmlBody.cart) {
            update.cart = htmlBody.cart;
        }
        if (htmlBody.wishlist) {
            update.wishlist = htmlBody.wishlist;
        }
        if (htmlBody.addresses) {
            update.addresses = htmlBody.addresses;
        }
        if (htmlBody.recently_viewed) {
            update.recently_viewed = htmlBody.recently_viewed;
        }
        if (htmlBody.email) {
            update.email = htmlBody.email
        }

        Users.findOneAndUpdate(
            {_id:htmlBody.id},
            update,
            {new:true},        
            (err, result) => {
                if(err){
                    res.status(501).json({message:err});
                }else{
                    if(result["n"] == 0) {
                        res.status(501).json({ message:"Users doesnt exist or wromg id"});
                    }else {
                        res.status(201).json({ message:"Users updated"});                    
                    }
                }
        });
    }else {
        res.status(501).send({message:"id not included in htmlbody"});
    }
})

module.exports = router;