const userCtrl = require("../users/userCtrl");

module.exports = app => {
  app.route("/api/carts/:id")
    .post(userCtrl.updateUserCart)
}
