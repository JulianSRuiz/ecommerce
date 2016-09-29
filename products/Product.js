const mongoose = require("mongoose");
const Product = new mongoose.Schema({
  title: {type: String, require: true, index: true, unique: true},
  description: {type: String, required: true},
  price: {type: Number, require: true, min: 0}
});

module.exports = {
  productModel: mongoose.model("Product", Product),
  productSchema: Product
}
