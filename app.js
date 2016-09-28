angular.module("eApp", [])
  .controller("eCtrl", function($scope, eService) {
    $scope.getProducts = function() {eService.getProducts()
    .then(products => {
      console.log(products);
      $scope.products = products.data;
    });
  }
    $scope.getProducts();
  })
  .service("eService", function($http) {
    this.getProducts = () => {
      return $http.get("http://localhost:5000/api/products");
    }
    this.postProducts = product => {
      return $http.post("http://localhost:5000/api/products", product);
    }
  });
