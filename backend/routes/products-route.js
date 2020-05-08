const express = require("express");
const router = express.Router();

//import models
const Products = require("../models/products");

//get code for products
router.get("/:id?", (req, res) => {
    if (req.params.id ){
        Products.find({_id:req.params.id},(err, Products ) => {
            res.json(Products);
        });
    }else {
        Products.find((err, Products ) => {
            res.json(Products);
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
    Products.remove({_id:req.params.id}, (err, result) => {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }   
    });

});

module.exports = router;