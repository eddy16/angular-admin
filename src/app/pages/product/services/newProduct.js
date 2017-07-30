(function () {
  'use strict';

  angular.module('BlurAdmin.pages.product')
      .factory('Product', Product);

  /** @ngInject */
  function Product($firebaseObject) {
    return function(id) {
      // create a reference to the database node where we will store our data
      var ref = firebase.database().ref('products').push();
      var newProduct = ref.child(id);

      // return it as a synchronized object
      return $firebaseObject(newProduct);
    }
  }
})();
