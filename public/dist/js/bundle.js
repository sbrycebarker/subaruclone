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
      $scope.cars = "results";
    });
  };

  $scope.getCars();

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
});
//# sourceMappingURL=bundle.js.map
