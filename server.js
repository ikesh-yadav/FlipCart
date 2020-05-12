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
app.use('/', express.static(path.join(__dirname, 'static')));


//port number
const port = process.env.PORT || 3000 ;

//use the sepcified route
app.use("/api/users/",users_route);
app.use("/api/products/",products_route);
app.use("/api/orders/",orders_route);
app.use("/api/reviews/",reviews_route);


app.get("/", (req,res) => {
    res.send("<h1>hello</h1>");
})

app.listen(port, () => {
    console.log("Server started at port: "+port)
})
