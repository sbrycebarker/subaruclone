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


})
