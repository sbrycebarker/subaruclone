'use strict';

angular.module('myApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/');
  $stateProvider.state('home', {
    url: '/',
    templateUrl: "../views/main.html",
    controller: 'mainCtrl'
  }).state('vehicles', {
    url: '/vehicles/:vehicle',
    templateUrl: "../views/vehicles.html",
    controller: 'mainCtrl',
    controllerAs: 'mainCtrl'
  }).state('build', {
    url: '/build',
    templateUrl: "../views/build-your-own.html",
    controller: 'mainCtrl'
  }).state('cart', {
    url: '/cart/:vehicle',
    templateUrl: "../views/cart.html",
    controller: 'mainCtrl'
  });
});
'use strict';

angular.module('myApp').directive('tasks', function () {
  return {
    restrict: 'E',
    templateUrl: "./views/cardropdown.html"
  };
});
'use strict';

angular.module('myApp').controller('mainCtrl', function ($scope, $stateParams, mainService, $http) {

  $scope.getCars = function (results) {
    mainService.getCars().then(function (results) {
      $scope.cars = results.data;
    });
  };

  $scope.getCars();

  $scope.getCart = function (results) {
    mainService.getCart().then(function (results) {
      // console.log(results.data)
      $scope.cart = results.data;
    });
  };

  $scope.getCart();

  $scope.postCart = function (data) {
    mainService.postCart(data);
    $scope.data.push(data);
  };

  // $scope.changeCart() = function( item, i ) {
  //   mainService.changeCart( item );
  //   $scope.data = item
  // }

  $scope.deleteCart = function (id, i) {
    var removeItem = $scope.data.splice(i, 1);
    mainService.deleteCart(id).then(function () {}, function (err) {
      $scope.data.splice(i, 0, removedItem[0]);
    });
  };

  $scope.changeCart = function (item, i) {
    mainService.changeCart(item);
    $scope.data[i].option = item.addedoption;
  };

  //
  // $http({
  //   url: "/vehicle/",
  //   method: "GET",
  //   params: { id: $stateParams.id}
  // }).then(function (response) {
  //   this.vehicle =response
  // })

  $scope.vehicleData = function (response) {
    mainService.vehicleData().then(function (results) {
      $scope.vehicle = results.data;
    });
  };
  $scope.vehicleData();

  $scope.showmenu = false;
});
'use strict';

angular.module('myApp').service('mainService', function ($http, $stateParams) {

  this.getCars = function (cars) {
    // console.log(car)
    return $http({
      method: 'GET',
      url: '/getCars'

    });
  };
  this.getCart = function (cars) {
    return $http({
      method: 'GET',
      url: '/getCart'
    });
  };
  this.postCart = function (data) {
    return $http({
      method: 'POST',
      url: '/postCart',
      data: data
    });
  };

  this.vehicleData = function (data) {
    return $http({
      method: "GET",
      url: '/getCars/' + $stateParams.vehicle
    });
  };

  // this.deleteCart = function(id) {
  //   return $http({
  //     method: 'DELETE',
  //     url:'/delete' + id
  //   })
  // }
  this.changeCart = function (item) {
    return $http({
      method: 'PUT',
      url: '/change' + item.id,
      data: item
    });
  };
});
'use strict';

angular.module('myApp').directive('shop', function () {
  return {
    restrict: 'E',
    templateUrl: "./views/shopping.html"
  };
});
'use strict';

angular.module('myApp').directive('panel', function () {
  return {
    restrict: 'E',
    templateUrl: "./views/panel.html"
  };
});
//# sourceMappingURL=bundle.js.map
