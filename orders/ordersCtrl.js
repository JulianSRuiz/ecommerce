const Order = require("./Orders");
const User = require("./../users/User");

module.exports = {
  postOrder(req, res) {
    new Order(req.body).save((err, order) => {
      if (err) {
        return res.status(500).json(err);
      }
      User.findByIdAndUpdate(req.params.user_id, {$push: {orders: order._id}}, (err, user) => {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(201).json(user);
      })
    })

  }
}
