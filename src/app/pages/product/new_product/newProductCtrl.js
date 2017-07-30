(function () {
  'use strict';

  angular.module('BlurAdmin.pages.product')
      .controller('NewProductCtrl', NewProductCtrl);

  /** @ngInject */
  function NewProductCtrl($scope, Product) {
   var vm = this;
    vm.productInfo = {};
    vm.pricing = {};

    $scope.saveProduct =  function(){
      alert("Entro");
      var product = Product(vm.productInfo.productId);
      product.name = vm.productInfo.productName;
      product.category = vm.productInfo.productCategory;
      product.brand = vm.productInfo.productBrand;
      product.price = vm.pricing.price;
      product.iva   = vm.pricing.iva;
      product.stock = vm.pricing.stock;
      product.$save().then(function() {
        console.log('Product saved!');
      }).catch(function(error) {
        console.log('Error!'+error);
      });
    }

  }

})();
