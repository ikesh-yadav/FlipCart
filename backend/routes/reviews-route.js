const express = require("express");
const router = express.Router();

//import models
const Reviews = require("../models/reviews");

//get code for products
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
//to get review related to a user
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
//to get review related to a product
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

//post code for products
router.post("/", (req, res) => {
    let newReview = new Reviews({
        user_id:req.body.user_id,
        product_id:req.body.product_id,
        stars:req.body.stars    
    });
    if (req.body.review) {
            newReview.review = req.body.review;
    }
    newReview.save((err, contact) => {
        if(err) {
            res.json({status:"Failed",msg:err});
        }else {
            res.json({status:"sucess", msg:"Contact addded succesfully"});
        }
    })
    content="Hello "+req.body.name;
});

//delete code for products
router.delete("/:id", (req, res ) => {
    Reviews.remove({_id:req.params.id}, (err, result) => {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }   
    });

});

module.exports = router;