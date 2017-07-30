(function () {
  'use strict';

  angular.module('BlurAdmin.pages.product')
      .controller('ProductListCtrl', ProductListCtrl);

  /** @ngInject */
  function ProductListCtrl($scope, Products) {
   var vm = this;
    vm.products = Products();
    console.log(vm.products);
    vm.categories = [
      {value: 1, text: 'Electronics'},
      {value: 2, text: 'Toys'},
      {value: 3, text: 'Accessories'},
    ];

    vm.showCategories = function(product) {
      var selected = [];
      if(product) {
        selected = $filter('filter')(vm.categories, {value: product.category});
      }
      return selected.length ? selected[0].text : 'Not set';
    };

    $scope.removeProduct = function(index) {
      vm.products.splice(index, 1);
    };

  }

})();
