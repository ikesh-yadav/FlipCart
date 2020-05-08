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
mongoose.connect("mongodb://localhost:27017/FlipCart", { useNewUrlParser: true,  useUnifiedTopology: true  });

mongoose.connection.on("connected", () => {
    console.log("Connected to mongodb at port 27017");
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
const port = 3000;

//use the sepcified route
app.use("/api/users/",users_route);
app.use("/api/products/",products_route);
app.use("/api/orders/",orders_route);
app.use("/api/reviews/",reviews_route);


app.get("/", (req,res) => {
    res.send("<h1>hello</h1>");
})

app.listen(port, () => {
    console.log("Server started at: "+port)
})
