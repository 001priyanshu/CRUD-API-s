const express = require("express");
const app = express();

const db = require("./config//database.js");
require('dotenv').config()
const {createProduct, getAllProducts,deleteProduct, updateProduct, productDetails} = require('./controllers/productController'); 

const port = process.env.PORT || 5000;

const cors = require('cors')


app.use(express.json());

app.use(cors())

app.post("/createProduct",createProduct);
app.get("/",getAllProducts);
app.get("/productDetails",productDetails);
app.delete("/deleteProduct",deleteProduct);
app.put("/updateProduct",updateProduct);

app.listen(port,(err)=>{
    if(err){
        console.log("Error in starting the server: " ,err );

    }
    console.log(`Server is runing at port ${port}`);
})