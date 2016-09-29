const mongoose = require("mongoose");
const Cart = require("./../carts/Carts");

const User = new mongoose.Schema({
  name: {type: String, require: true},
  email: {type: String, required: true, unique: true, index: true},
  password: {type: String, required: true},
  cart: [Cart],
  orders: [{type: mongoose.Schema.Types.ObjectId, ref: "Order"}]
});

module.exports = mongoose.model("User", User)
