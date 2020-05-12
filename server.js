//importing modules
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");

let app = express();


//importing routes
const users_route = require("./routes/users-route");
const products_route = require("./routes/products-route");
const orders_route = require("./routes/orders-route");
const reviews_route = require("./routes/reviews-route");


//connect to mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://ikesh:ikesh@cluster0-kqrxx.gcp.mongodb.net/FlipCart?retryWrites=true&w=majority", { useNewUrlParser: true,  useUnifiedTopology: true  });

mongoose.connection.on("connected", () => {
    console.log("Connected to mongodb atlas at port 27017");
});

mongoose.connection.on("error", (err) => {
    if(err) {
        console.log("error connecting to mongodb:"+err);
    }
});

//adding middleware-cors
app.use(cors());

//adding middware-body-parse
app.use(bodyparser.json());

//static files


//port number
const port = process.env.PORT || 3000 ;

//use the sepcified route
app.use("/api/users",users_route);
app.use("/api/products",products_route);
app.use("/api/orders",orders_route);
app.use("/api/reviews",reviews_route);


app.get("/", (req,res) => {
    res.send("<h1>hello</h1>");
});

app.get("/api", (req,res) => {
    res.send(`
    <h1>API documentation</h1>
    <p>Users:-
    Get
        URL/api/users
            -to retrieve all users 
        URL/api/users/id
            -to retrieve user with _id=id
    Post
        URL/api/users
            -to add a user send the required fields in html body
        URL/api/users/update
            -to update a user's data, you can update
                --name
                --phone_no
                --cart
                --wishlist
                --recently visited
                --addresses
                --email
    Delete
        URL/api/users/delete
            -to delete a user with _id, send id in html body with fieldname id

Products:-
    Get
        URL/api/products
            -to retrieve all products 
        URL/api/products/id
            -to retrieve product with _id=id
    Post
        URL/api/products
            -to add a product send the required fields in html body
        URL/api/products/update
            -to update a product's data, you can update
                --name
                --category
                --sold_by
                --highlights
                --full_details
    Delete
        URL/api/products/delete
            -to delete a product with _id, send id in html body with fieldname id

Orders:-
    Get
        URL/api/orders
            -to retrieve all orders 
        URL/api/orders/id
            -to retrieve order with _id=id
        URL/api/orders/users/id
            -to retrieve orders with user_id=id
    Post
        URL/api/orders
            -to add a order send the required fields in html body
        URL/api/orders/update
            -to update a order's data, you can update
                --delivery_address
                --delivery_date
    Delete
        URL/api/orders/delete
            -to delete a order with _id, send id in html body with fieldname id

Reviews:-
    Get
        URL/api/reviews
            -to retrieve all reviews 
        URL/api/reviews/id
            -to retrieve reviews with _id=id
        URL/api/reviews/users/id
            -to retrieve reviews with user_id=id
        URL/api/reviews/products/id
            -to retrieve reviews with product_id=id
    Post
        URL/api/reviews
            -to add a review, send the required fields in html body
        URL/api/reviews/update
            -to update a review's data, you can update
                --review
                --stars
    Delete
        URL/api/reviews/delete
            -to delete a review with _id, send id in html body with fieldname id</p>           
    
    
    `);
});

app.listen(port, () => {
    console.log("Server started at port: "+port)
})
