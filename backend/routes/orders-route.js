const express = require("express");
const router = express.Router();

//import models
const Orders = require("../models/orders");

//get code for orders
router.get("/:id?", (req, res) => {
    if (req.params.id ){
        Orders.find({_id:req.params.id}, (err, orders ) => {
            res.json(orders);
        });
    }else {
        Orders.find((err, orders ) => {
            res.json(orders);
        });
    }
});
//get orders placed by an user
router.get("/users/:id", (req, res) => {
    if (req.params.id ){
        Orders.find({user_id:req.params.id}, (err, orders ) => {
            res.json(orders);
        });
    }else {
        Orders.find((err, orders ) => {
            res.json(orders);
        });
    }
});

//post code for orders
router.post("/", (req, res) => {
    // if (req.body.name){
        content="Hello "+req.body.name;
    // }else {
    //     content = "<h2>api home from post</h2";
    // }
    res.send(content);
});

//delete code for orders
router.delete("/:id", (req, res ) => {
    Orders.remove({_id:req.params.id}, (err, result) => {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }   
    });

});

module.exports = router;