const express = require("express");
const app = express();

const db = require("./config//database.js");
require('dotenv').config()
const {createProduct, getAllProducts} = require('./controllers/productController'); 

const port = process.env.PORT || 5000;


app.use(express.json());
app.get("/",(req,res)=>{
    res.send("https://apiiiiiiiiiiiiiiiii.herokuapp.com/createProduct for creating a product and https://apiiiiiiiiiiiiiiiii.herokuapp.com/getProduct for get all products");
});

app.post("/createProduct",createProduct);
app.get("/getProduct",getAllProducts);

app.listen(port,(err)=>{
    if(err){
        console.log("Error in starting the server: " ,err );

    }
    console.log(`Server is runing at port ${port}`);
})