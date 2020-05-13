const express = require("express");
const router = express.Router();

//import models
const Products = require("../models/products");

//get code for retriving one product with matching id or all products
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
//post code for adding  products to database
router.post("/", (req, res) => {
    htmlBody = req.body;
    if (htmlBody.name && htmlBody.category && htmlBody.sold_by){
        newProduct = new Products({
            name:htmlBody.name,
            category:htmlBody.category,
            sold_by:htmlBody.sold_by
        });
        newProduct.save((err) => {
            if(err) {
                res.send("Error saving Product:"+err);
            }else {
                res.send("Product saved succesfully");
            }
        });
    }else {
        res.send("Not enough data to add Product");
    }
});

//delete product code
router.delete("/delete", (req, res) => {
    if(req.body.id) {
        Products.deleteOne({_id:req.body.id}, (err, result) => {
            if(err){
                res.send("Error deleting product:"+err);
            }else{
                if(result["n"] == 0) {
                    res.send("Product doesnt exist or wromg id");
                }else {
                    res.send("Product deleted succesfully");
                }
            }
        });
    }else {
        res.send("id not included in htmlbody");
    }
})


//update Product data
router.post("/update", (req,res) => {
    htmlBody = req.body;
    if(htmlBody.id){
        update = {}
        if (htmlBody.name) {
            update.name = htmlBody.name;
        }
        if (htmlBody.category) {
            update.category = htmlBody.category;
        }
        // if (htmlBody.sold_by) {
        //     update.sold_by = htmlBody.sold_by;
        // }//you shouldn't be able to update sold_by
        if (htmlBody.hightlights) {
            update.hightlights = htmlBody.hightlights;
        }
        if (htmlBody.full_details) {
            update.full_details = htmlBody.full_details;
        }
        if (htmlBody.price) {
            update.price = htmlBody.price;
        }

        Products.findOneAndUpdate(
            {_id:htmlBody.id},
            update,        
            (err, result) => {
            if(err) res.send(err);
            else{
                // res.json(result);
                if(result["n"] == 0) {
                    res.send("Update unsuccesfull");
                }else {
                    res.send("Product updated");
                }
            }
        });
    }else {
        res.send("id not included in htmlbody");
    }
})
module.exports = router;