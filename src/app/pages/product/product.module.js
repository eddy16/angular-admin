(function () {
  'use strict';

  angular.module('BlurAdmin.pages.product', ['ui.select', 'ngSanitize'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('main.product', {
          url: '/products',
          template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Inventory',
          sidebarMeta: {
            icon: 'ion-ios-cart',
            order: 250,
          },
          authenticate:true
        })
        .state('main.product.new', {
          url: '/new_product',
          templateUrl: 'app/pages/product/new_product/newProduct.html',
          controller: 'NewProductCtrl',
          controllerAs: 'vm',
          title: 'New Product',
          sidebarMeta: {
            order: 800,
          },
          authenticate:true
        })
        .state('main.product.list', {
          url: '/list_product',
          templateUrl: 'app/pages/product/product_list/productList.html',
          controller: 'ProductListCtrl',
          controllerAs: 'vm',
          title: 'Edit Product',
          sidebarMeta: {
            order: 800,
          },
          authenticate:true
        });
  }
})();
