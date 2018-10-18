angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true)
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
            controller: 'buildCtrl',
            controllerAs: 'buildCtrl'
          })
          .state('build', {
            url: '/build',
            templateUrl: "../views/build-your-own.html",
            controller: 'buildCtrl'
          })
          .state('cart', {
            url: '/cart/:vehicle',
            templateUrl: "../views/cart.html",
            controller: 'buildCtrl'
          })
})
// .filter('startFrom', function() {
//             return function(data, start) {
//               return data.slice(start);
//             }
//           })
