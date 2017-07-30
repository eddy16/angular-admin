(function () {
  'use strict';

  angular.module('BlurAdmin.pages.product')
      .factory('Products', Products);

  /** @ngInject */
  function Products($firebaseArray) {
    return function() {
      var ref = firebase.database().ref().child("products");
      // return it as a synchronized array
      return $firebaseArray(ref);
    }
  }
})();
