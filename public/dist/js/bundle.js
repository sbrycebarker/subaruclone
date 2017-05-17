'use strict';

angular.module('myApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/');
  $stateProvider.state('home', {
    url: '/',
    templateUrl: "../views/main.html",
    controller: 'mainCtrl'
  }).state('vehicles', {
    url: '/vehicles/:vehicle',
    templateUrl: "../views/cars.html",
    controller: 'mainCtrl'
  }).state('build', {
    url: '/build',
    templateUrl: "../views/build&price.html",
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

angular.module('myApp').controller('mainCtrl', function ($scope, mainService) {

  $scope.getCars = function (results) {
    mainService.getCars().then(function (results) {
      $scope.cars = results.data;
    });
  };

  $scope.getCars();

  $scope.getCart = function (results) {
    mainService.getCart().then(function (results) {
      console.log(results.data);
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
  //   $scope.data[i].options = options.things
  // }
  //
  // $scope.deleteCart = function(id, i) {
  //   var removeItem = $scope.data.splice(i, 1)
  //   mainService.deleteCart(id).then(function(){
  //
  //   }, function(err) {
  //     $scope.data.splice(i, 0, removedItem[0]);
  //   });
  // }


  $scope.showmenu = false;
});
'use strict';

angular.module('myApp').service('mainService', function ($http) {

  this.getCars = function (cars) {
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
  //
  // this.deleteCart = function(id) {
  //   return $http({
  //     method: 'DELETE',
  //     url:'/delete' + id
  //   })
  // }
  // this.changeData = function(item) {
  //   return $http({
  //     method: 'PUT',
  //     url: '/change' + item.id,
  //     data: item
  //   })
  // }

});
// angular.module('myApp').directive('tasks', function() {
//   return {
//       restrict: 'E',
//       templateUrl: "./views/panelview.html"
//    }
//
//   })
"use strict";
//# sourceMappingURL=bundle.js.map
