const mainCtrl = require("./mainCtrl.js");

module.exports = app => {
  app.route("/api/products")
    .post(mainCtrl.postProducts)
    .get(mainCtrl.getProducts)

  app.route("/api/products/:id")
    .get(mainCtrl.getProduct)
    .put(mainCtrl.updateProduct)
    .delete(mainCtrl.deleteProduct);
  // app.get('/api/products', mainCtrl.getProducts);
  // app.get('/api/products/:id', mainCtrl.getProductsById);
  // app.post('/api/products', mainCtrl.postProducts);
  // app.put('/api/products/:id', mainCtrl.putProducts);
  // app.delete('/api/products/:id', mainCtrl.deleteProducts);


}
