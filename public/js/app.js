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
            templateUrl: "../views/vehicles.html",
            controller: 'mainCtrl',
            controllerAs: 'mainCtrl'
          })
          .state('build', {
            url: '/build',
            templateUrl: "../views/build-your-own.html",
            controller: 'mainCtrl'
          })
          .state('cart', {
            url: '/cart/:vehicle',
            templateUrl: "../views/cart.html",
            controller: 'mainCtrl'
          })


})
