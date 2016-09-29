const User = require("./user");
const Cart = require("./../carts/Carts");

module.exports = {

  getUser(req, res) {
    User.findById(req.params.id, (err, response) => {
      if (err) {
        res.status(500).json(err);
      }
      return res.status(200).json(response);
    });
  },
  updateUserCart(req, res) {
    User.findByIdAndUpdate(req.params.id, {$push: {cart: req.body}}, (err, response) => {
      if (err) {
        res.status(500).json(err);
      }
      return res.status(200).json(response);
    });
  },
  postUser(req, res) {
    new User(req.body).save((err, response) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(201).json(response)
    });
  }
}
