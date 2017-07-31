(function () {
    'use strict';

    angular.module('BlurAdmin.pages.product')
        .factory('Products', Products);

    /** @ngInject */
    function Products($firebaseArray) {
        return function () {
            var ref = firebase.database().ref();
            // return          // it as a synchronized array
            ref.on("value", function (snapshot) {
                console.log('SNAP: ' + snapshot.val());
            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });
            return $firebaseArray(ref.child('/products'));
        }
    }
})();