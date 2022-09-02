
const Product = require('../models/productModel.js')

exports.getAllProducts = async (req, res, next) => {

    const products = await Product.find();
    console.log("Products", products);
 
     res.status(201).json({
         success: true,
         products,
         
 
     })
 };
exports.createProduct = (async (req, res, next) => {
    // req.body.user = req.user.id;
    // console.log(req.body.user);
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
});