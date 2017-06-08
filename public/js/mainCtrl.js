angular.module('myApp').controller('mainCtrl', function($scope, $stateParams, mainService, $http) {

  $scope.getCars = function(results) {
    mainService.getCars().then(function(results){
      $scope.cars = results.data
    })
  }
  $scope.getCars();

  $scope.colors = function(results) {
    mainService.colors().then(function(results) {
      $scope.colors = results.data.color
      $scope.ints = results.data.interior
    })
  }

  $scope.colors()

    $scope.vehicleData = function(response) {
      mainService.vehicleData().then(function(results){

      $scope.vehicle = results.data
      $scope.getOptions($scope.vehicle.options)
      })
    }
    $scope.vehicleData();


    $scope.getOptions = function(options) {
      mainService.getOptions(options).then(function(results){
        console.log("access", results.data)
        $scope.accessories = results.data
      })
    }

    $scope.carOptions = function (options) {
      mainService.carOptions(options).then(function(results) {
      // console.log("ops", results.data)
      $scope.options = results.data
      })
    }
    $scope.carOptions();



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

  $scope.postCart = function( data ) {
    console.log("scope", data)
    mainService.postCart(data.data)
    $scope.cart.push(data.data)

  }

  $scope.deleteCart = function(id, i) {
    var removeItem = $scope.data.splice(i, 1)
    mainService.deleteCart(id).then(function(){

    }, function(err) {
      $scope.data.splice(i, 0, removedItem[0]);
    });
  }

  $scope.getCart = function(results) {
    mainService.getCart().then(function(results) {
      console.log("cart", results.data)
      $scope.cart = results.data
    })
  }
  $scope.getCart();


})

  //
  // $scope.getCart()



  // $scope.changeCart() = function( item, i ) {
  //   mainService.changeCart( item );
  //   $scope.data = item
  // }
