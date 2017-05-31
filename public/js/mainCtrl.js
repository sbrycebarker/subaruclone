angular.module('myApp').controller('mainCtrl', function($scope, $stateParams, mainService, $http) {

  $scope.getCars = function(results) {
    mainService.getCars().then(function(results){
      $scope.cars = results.data
    })
  }

  $scope.getCars();


  $scope.getCart = function(results) {
    mainService.getCart().then(function(results) {
      // console.log(results.data)
      $scope.cart = results.data
    })
  }

  $scope.getCart()

  // $scope.postCart = function( data ) {
  //   mainService.postCart( data )
  //   $scope.data.push( data )
  // }

  // $scope.changeCart() = function( item, i ) {
  //   mainService.changeCart( item );
  //   $scope.data = item
  // }

  $scope.deleteCart = function(id, i) {
    var removeItem = $scope.data.splice(i, 1)
    mainService.deleteCart(id).then(function(){

    }, function(err) {
      $scope.data.splice(i, 0, removedItem[0]);
    });
  }



    //
    // $http({
    //   url: "/vehicle/",
    //   method: "GET",
    //   params: { id: $stateParams.id}
    // }).then(function (response) {
    //   this.vehicle =response
    // })

    $scope.vehicleData = function(response) {
      mainService.vehicleData().then(function(results){
        console.log(results.data.options)
      $scope.vehicle = results.data
      })
    }
    $scope.vehicleData();

    $scope.getOptions = function(response) {
      mainService.vehicleData().then(function(results){
        console.log(results.data)
        $scope.accessories = results.data.options
      })
    }
    $scope.getOptions();


  $scope.showmenu = false;
  $scope.showpanel = false;

})
