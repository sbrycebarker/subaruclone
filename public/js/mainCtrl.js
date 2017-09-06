angular.module('myApp').controller('mainCtrl', function($scope, $stateParams, mainService, $http) {
  function boxCloser(event){

  $(html, body).click(function() {
      console.log("CLICKY")
      $(".dropdown").hide();
      // $(".dropdown-content").removeClass("show");
  });
  }

  $scope.getCars = function(results) {
    mainService.getCars().then(function(results){
      $scope.cars = results.data
    })
  }
  try {
    $scope.getCars();
} catch (err){
  console.error("err")
}

    $scope.showhide = function (param) {
      $scope.BRZ = false
      $scope.WRX = false
      $scope.Crosstrek = false
      $scope.Legacy = false
      $scope.Forester = false
      $scope.Outback = false
      $scope.Impreza = false
      $scope[param] = true
    }
  $scope.showmenu = false;
  $scope.orderpop = false;
  $scope.ty = false
})
