angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.when('', '/');
          $stateProvider
          .state('home', {
            url: '/',
            templateUrl: "../views/main.html",
            controller: 'mainCtrl'
          })
          .state('vehicles', {
            url: '/vehicles/:vehicle',
            templateUrl: "../views/cars.html",
            controller: 'mainCtrl'
          })
          .state('build', {
            url: '/build',
            templateUrl: "../views/build&price.html",
            controller: 'mainCtrl'
          })
          .cart('cart', {
            url:'/cart',
            templateUrl: "../views/cart.html",
            controller:'mainCtrl'
          })


})
