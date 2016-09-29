//const mongo = require("mongojs");
const Product = require("./Product").productModel;
//const db = mongo("ecommerce", ["products"]);

module.exports = {

  getProducts(req, res) {
    Product.find({}, (err, products) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(products);
    });
  },
  getProduct(req, res) {
    Product.findById(req.params.id, (err, product) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(product);
    })
  },
  updateProduct(req, res) {
    Product.findByIdandUpdate(req.params.id, req.body, (err, product) => {
      if (err) {
        return res.status(500).json(err);
      }
      Product.findById(req.params.id, (err, updateProduct) => {
      if (err) {
        return res.status(500).json(err);
        }
        return res.status(200).json(updateProduct);
      });
    });
  },
  postProducts(req, res) {
    new Product(req.body).save((err, product) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(201).json(product);
    });
  },
  deleteProduct(req, res) {
    Product.findByIdAndRemove(req.params.id, (err, product) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(product);
    });
  },



  // getProducts(req, res){
  //   db.products.find({status: req.query.status}, function(err, products) {
  //     res.send(products);
  //   });
  // },
  //
  // getProductsById(req, res){
  //   var idObj = {
  //     _id: mongo.ObjectId(req.params.id)
  //   };
  //   db.products.findOne(idObj, function(err, response) {
  //     if (err) {
  //       res.status(500).json(err);
  //     }
  //     else {
  //       res.json(response);
  //     }
  //   });
  // },
  //
  // postProducts(req, res){
  //   console.log("hi");
  //   db.products.insert(req.body, function(error, response) {
  //     if (error) {
  //       return res.status(500).json(error);
  //     }
  //     else {
  //       return res.json(response);
  //     }
  //   });
  // },
  //
  // putProducts(req, res){
  //   db.products.update({_id: ObjectId(req.query.id)}, {$set: {order: req.body.order}}, function(err, products) {
  //     res.send(products);
  //   });
  // },
  //
  // deleteProducts(req, res){
  //   if (!req.params.id) {
  //     return res.status(400).send('id query needed');
  //   }
  //   var query = {
  //     _id: mongo.ObjectId(req.params.id)
  //   };
  //   db.products.remove(query, function(error, response) {
  //     if (error) {
  //       return res.status(500).json(error);
  //     }
  //     else {
  //       res.json(response);
  //     }
  //   });
  // },

};
