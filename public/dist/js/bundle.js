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

  // $scope.postCart = function( data ) {
  //   mainService.postCart( data )
  //   $scope.data.push( data )
  // }

  // $scope.changeCart() = function( item, i ) {
  //   mainService.changeCart( item );
  //   $scope.data = item
  // }


  $scope.colors = function (results) {
    mainService.colors().then(function (results) {
      $scope.colors = results.data.color;
      $scope.ints = results.data.interior;
    });
  };

  $scope.colors();

  // $scope.deleteCart = function(id, i) {
  //   var removeItem = $scope.data.splice(i, 1)
  //   mainService.deleteCart(id).then(function(){
  //
  //   }, function(err) {
  //     $scope.data.splice(i, 0, removedItem[0]);
  //   });
  // }

  $scope.vehicleData = function (response) {
    mainService.vehicleData().then(function (results) {

      $scope.vehicle = results.data;
      $scope.getOptions($scope.vehicle.options);
    });
  };
  $scope.vehicleData();

  $scope.getOptions = function (options) {
    mainService.getOptions(options).then(function (results) {
      console.log(results.data);
      $scope.accessories = results.data.options;
    });
  };

  // $scope.carOptions = function(results) {
  //   mainService.carOptions(results).then(function(results) {
  //     console.log(results)
  //     $scope.options = results
  //   })
  // }
  // $scope.carOptions();
  //


  $scope.showhide = function (param) {
    $scope.BRZ = false;
    $scope.WRX = false;
    $scope.Crosstrek = false;
    $scope.Legacy = false;
    $scope.Forester = false;
    $scope.Outback = false;
    $scope.Impreza = false;
    $scope[param] = true;
  };

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
  this.getOptions = function (data) {
    return $http({
      method: "POST",
      url: '/getOptions/',
      data: data
    });
  };

  this.getCart = function (cars) {
    return $http({
      method: 'GET',
      url: '/getCart'
    });
  };
  // this.postCart = function(data) {
  //   return $http({
  //     method: 'POST',
  //     url: '/postCart',
  //     data: data
  //   })
  // }

  this.vehicleData = function (data) {
    return $http({
      method: "GET",
      url: '/getCars/' + $stateParams.vehicle
    });
  };

  this.colors = function (color) {
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
