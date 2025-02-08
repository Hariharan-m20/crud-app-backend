console.log("hello hari!!!");

const express = require('express');
const mongoose = require('mongoose');
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

const app =  express();

 app.use(express.json()); // to accept json data to POST API
 app.use(express.urlencoded({extended : false})); // to accept form data to POST API

 app.use("/api/products",productRoute); // end point will only goes to route file!!!!!!!!!!!!!!!!!!!!!
 
mongoose.connect("mongodb+srv://hariharan71271:r2jxjvbfYq576lAC@backenddb.8qdpb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")

.then(()=>{  // Good practice is to first connect to the DB and then to the express server!!!!
    app.listen(3000, ()=>{
        console.log("Server is listening on port 3000!!!");
    })
    console.log("MongoDB Connection Successful !");
})
.catch(()=>{
    console.log("Error in Connecting to the MongoDB !");
});

// app.get("/",(req, res)=>{
//     res.send("Data From Express Server updated !");
// }); 

