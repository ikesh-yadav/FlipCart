const express = require("express");
const router = express.Router();

//import models
const Users = require("../models/users");

//get code for retriving one user with matching id or all users
router.get("/:id?", (req, res) => {
    if (req.params.id ){
        Users.find({_id:req.params.id},(err, users ) => {
            res.json(users);
        });
    }else {
        Users.find((err, users ) => {
            res.json(users);
        });
    }
});
//post code for adding users
router.post("/", (req, res) => {
    htmlBody = req.body;
    if (htmlBody.name && htmlBody.phone_no){
        newUser = new Users({
            name:htmlBody.name,
            phone_no:htmlBody.phone_no
        });
        newUser.save((err) => {
            if(err) {
                res.send("Error saving user:"+err);
            }else {
                res.send("Users saved succesfully");
            }
        });
    }else {
        res.send("Not enough data to add user");
    }
});

//code for deleting a user
router.delete("/delete", (req, res) => {
    if(req.body.id) {
        Users.deleteOne({_id:req.body.id}, (err, result) => {
            if(err){
                res.send("Error deleting user:"+err);
            }else{
                if(result["n"] == 0) {
                    res.send("Users doesnt exist or wromg id");
                }else {
                    res.send("Users deleted succesfully");
                }
            }
        });
    }else {
        res.send("id not included in htmlbody");
    }
})
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
                if(err) res.send(err);
                else{
                    // res.json(result);
                    if(result["n"] == 0) {
                        res.send("Update unsuccesfull");
                    }else {
                        res.send("Users updated");
                    }
            }
        });
    }else {
        res.send("id not included in htmlbody");
    }
})

module.exports = router;