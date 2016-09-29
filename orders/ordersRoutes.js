const orderCtrl = require("./ordersCtrl.js");

module.exports = app => {
  app.route("/api/orders/:user_id")
    .post(orderCtrl.postOrder)
}
