angular.module('myApp').controller('mainCtrl', function($scope, mainService) {

  $scope.getCars = function(results) {
    mainService.getCars().then(function(results){
      console.log('results')
      $scope.planets = results
    })
  }

  $scope.getCars

  $scope.showmenu = false;
})
