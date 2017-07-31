'use strict';
(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCYeQczeNV9PPPs14JgpZouUlDljb2R9YQ",
        authDomain: "cabare-wocom.firebaseapp.com",
        databaseURL: "https://cabare-wocom.firebaseio.com",
        projectId: "cabare-wocom",
        storageBucket: "cabare-wocom.appspot.com",
        messagingSenderId: "1069056229269"
    };
    // Initialize the default app
    var defaultApp = firebase.initializeApp(config);
    console.log(defaultApp.name);  // "[DEFAULT]"

    angular.module('BlurAdmin', [
        'ngAnimate',
        'ui.bootstrap',
        'ui.sortable',
        'ui.router',
        'ngTouch',
        'toastr',
        'smart-table',
        "xeditable",
        'ui.slimscroll',
        'ngJsTree',
        'angular-progress-button-styles',
        'firebase',
        'BlurAdmin.theme',
        'BlurAdmin.pages'
    ]);
})();
