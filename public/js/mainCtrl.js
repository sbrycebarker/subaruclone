angular.module('myApp').controller('mainCtrl', function($scope, mainService) {

  $scope.getCars = function(results) {
    mainService.getCars().then(function(results){
      $scope.cars = "results"
    })
  }

  $scope.getCars()

  $scope.showmenu = false;
})
