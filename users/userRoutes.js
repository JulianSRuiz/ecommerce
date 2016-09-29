const userCtrl = require("./userCtrl");

module.exports = app => {
  app.route("/api/users")
    .post(userCtrl.postUser);

  app.route("/api/users/:id")
    .get(userCtrl.getUser)
}
