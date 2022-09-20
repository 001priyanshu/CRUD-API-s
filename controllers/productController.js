
const Product = require('../models/productModel.js')

exports.getAllProducts = async (req, res, next) => {
  console.log("Inside get all product")
  const products = await Product.find();
  // console.log("Products", products);

  return res.status(201).json({
    success: true,
    products,


  })
};
exports.createProduct = (async (req, res, next) => {
  // req.body.user = req.user.id;
  console.log(req.body);
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product
  })

});

exports.productDetails = async(req,res,next) => {
  console.log("Product detials");
  console.log(req.query.id);
  Product.findOne({ _id: req.query.id })
    .exec((err, product) => {
      if (err || !product) {
        console.log("ERRR632082a2bbc8971baa93268f",err);
        return res.json({
          error: err,
        });
      }
       console.log(product);
        return  res.json({
          post : product
    }); 
        
       
        
    });
 }

exports.deleteProduct = (async (req, res, next) => {
  console.log("Inside delete");
  // console.log(req.query);

  Product.findOne({ _id: req.query.id })
    .exec((err, product) => {
      if (err || !product) {
        return res.json({
          error: err,
        });
      }

      product
        .remove()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          console.log(err);
        });

    });
})


exports.updateProduct = (async (req, res, next) => {
  console.log("Inside update")

  Product.findByIdAndUpdate(req.query.id, req.body).
    exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      }
      else {
        return res.json(result);
      }
    });
});
