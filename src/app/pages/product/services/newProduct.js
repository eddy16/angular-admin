(function () {
    'use strict';

    angular.module('BlurAdmin.pages.product')
        .factory('Product', Product);

    /** @ngInject */
    function Product($firebaseObject) {
        return function () {
            // create a reference to the database node where we will store our data
            var newProduct = firebase.database().ref('products').push();
            // return it as a synchronized object
            return $firebaseObject(newProduct);
        }
    }
})();
