const productCtrl = require("./productCtrl.js");

module.exports = app => {
  app.route("/api/products")
    .post(productCtrl.postProducts)
    .get(productCtrl.getProducts)

  app.route("/api/products/:id")
    .get(productCtrl.getProduct)
    .put(productCtrl.updateProduct)
    .delete(productCtrl.deleteProduct);
  // app.get('/api/products', mainCtrl.getProducts);
  // app.get('/api/products/:id', mainCtrl.getProductsById);
  // app.post('/api/products', mainCtrl.postProducts);
  // app.put('/api/products/:id', mainCtrl.putProducts);
  // app.delete('/api/products/:id', mainCtrl.deleteProducts);


}
