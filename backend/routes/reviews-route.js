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
    // if (req.body.name){
        content="Hello "+req.body.name;
    // }else {
    //     content = "<h2>api home from post</h2";
    // }
    res.send(content);
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