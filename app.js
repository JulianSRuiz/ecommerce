angular.module("eApp", [])
  .controller("eCtrl", function($scope, eService, $http) {
    $scope.getProducts = function() {eService.getProducts()
    .then(products => {
      console.log(products);
      $scope.products = products.data;
    });
  }
    $scope.getProducts();
    $scope.postProducts = function(product) {
      return $http.post("http://localhost:5000/api/products", product);
    }
    $scope.deleteProduct = function(product) {
      console.log(product);
      return $http.delete("http://localhost:5000/api/products/" + product)
      .then(function() {
        $scope.getProducts();
      });
    }
  })
  .service("eService", function($http) {
    this.getProducts = () => {
      return $http.get("http://localhost:5000/api/products");
    }
  });
