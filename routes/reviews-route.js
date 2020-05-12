const express = require("express");
const router = express.Router();

//import models
const Reviews = require("../models/reviews");

//get code for reviews
router.get("/:id?", (req, res) => {
    if (req.params.id ){
        Reviews.find({_id:req.params.id}, (err, reviews ) => {
            res.json(reviews);
        });
    }else {
        Reviews.find((err, reviews ) => {
            res.json(reviews);
        });
    }
});
//to get reviews related to a user
router.get("/users/:id", (req, res) => {
    if (req.params.id ){
        Reviews.find({user_id:req.params.id}, (err, reviews ) => {
            res.json(reviews);
        });
    }else {
        Reviews.find((err, reviews ) => {
            res.json(reviews);
        });
    }
});

//to get reviews related to a review
router.get("/products/:id", (req, res) => {
    if (req.params.id ){
        console.log("debug"+req.params.id);
        Reviews.find({product_id:req.params.id}, (err, reviews ) => {
            res.json(reviews);
        });
    }else {
        Reviews.find((err, reviews ) => {
            res.json(reviews);
        });
    }
});

//post code for adding reviews
router.post("/", (req, res) => {
    htmlBody = req.body;
    if (htmlBody.user_id && htmlBody.product_id && htmlBody.stars){
        let newReview = new Reviews({
            user_id:req.body.user_id,
            product_id:req.body.product_id,
            stars:req.body.stars,    
        });
        if (req.body.review) {
                newReview.review = req.body.review;
        }
        newReview.save((err, result) => {
            if(err) {
                res.json({status:"failed",msg:err});
            }else {
                res.json({status:"sucess", msg:"Contact addded succesfully"});
            }
        });
    }else {
        res.send("Not enough information to add review");
    }
});

//delete code for review
router.delete("/delete", (req, res ) => {
    if(req.body.id) {
        Reviews.deleteOne({_id:req.body.id}, (err, result) => {
            if(err){
                res.send("Error deleting review:"+err);
            }else{
                if(result["n"] == 0) {
                    res.send("review doesnt exist or wromg id");
                }else {
                    res.send("review deleted succesfully");
                }
            }
        });
    }else {
        res.send("id not included in htmlbody");
    }

});

//update code for review
router.post("/update", (req,res) => {
    htmlBody = req.body;
    if(htmlBody.id){
        update = {}
        if (htmlBody.stars) {
            update.delivery_address = htmlBody.delivery_address;
        }
        if (htmlBody.review) {
            update.review = htmlBody.review;
        }
        
        Reviews.findOneAndUpdate(
            {_id:htmlBody.id},
            update,        
            (err, result) => {
            if(err) res.send(err);
            else{
                // res.json(result);
                if(result["n"] == 0) {
                    res.send("Update unsuccesfull");
                }else {
                    res.send("review updated");
                }
            }
        });
    }else {
        res.send("id not included in htmlbody");
    }
});


module.exports = router;