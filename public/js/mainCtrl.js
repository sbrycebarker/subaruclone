angular.module('myApp').controller('mainCtrl', function($scope, $stateParams, mainService, $http) {

  $scope.getCars = function(results) {
    mainService.getCars().then(function(results){
      $scope.cars = results.data
    })
  }
  $scope.getCars();

  // $scope.getCart = function(results) {
  //   mainService.getCart().then(function(results) {
  //     // console.log(results.data)
  //     $scope.cart = results.data
  //   })
  // }
  //
  // $scope.getCart()

  // $scope.postCart = function( data ) {
  //   mainService.postCart( data )
  //   $scope.data.push( data )
  // }

  // $scope.changeCart() = function( item, i ) {
  //   mainService.changeCart( item );
  //   $scope.data = item
  // }


  $scope.colors = function(results) {
    mainService.colors().then(function(results) {
      $scope.colors = results.data.color
      $scope.ints = results.data.interior
    })
  }

  $scope.colors()


  // $scope.deleteCart = function(id, i) {
  //   var removeItem = $scope.data.splice(i, 1)
  //   mainService.deleteCart(id).then(function(){
  //
  //   }, function(err) {
  //     $scope.data.splice(i, 0, removedItem[0]);
  //   });
  // }

    $scope.vehicleData = function(response) {
      mainService.vehicleData().then(function(results){

      $scope.vehicle = results.data
      $scope.getOptions($scope.vehicle.options)
      })
    }
    $scope.vehicleData();


    $scope.getOptions = function(options) {
      mainService.getOptions(options).then(function(results){
        console.log(results.data)
        $scope.accessories = results.data.options
      })
    }

    // $scope.carOptions = function(results) {
    //   mainService.carOptions(results).then(function(results) {
    //     console.log(results)
    //     $scope.options = results
    //   })
    // }
    // $scope.carOptions();
    $scope.accessories = function (access) {
      console.log(results)
      mainService.accessories(access).then(function(results) {
        $scope.options = results.data
      })
    }
    $scope.accessories();



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

})
