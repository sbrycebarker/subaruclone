angular.module('myApp').controller('mainCtrl', function($scope, $stateParams, mainService, $http) {

  $scope.getCars = function(results) {
    mainService.getCars().then(function(results){
      $scope.cars = results.data
    })
  }
  $scope.getCars();

  $scope.colors = function(results) {
    mainService.colors().then(function(results) {
      console.log("colorslist", results.data.colors)
      $scope.colors = results.data.colors
      $scope.ints = results.data.interior
    })
  }

  $scope.colors()

    $scope.vehicleData = function(response) {
      mainService.vehicleData().then(function(results){
        console.log("car", results.data)
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
    mainService.postCart(data)
    $scope.cart.push(data)

  }
$scope.chooseColor = function(color) {
  console.log("chosencolor", color)
$scope.color = color
}
$scope.chooseColor()

  $scope.addOption = function(option){
    console.log("adding", option)
    let flag = true
    for (var i = 0; i < $scope.cart.length; i++) {
      if (option._id[0] === $scope.cart[i].accessory._id[0]){
        console.log("matchfound")
        $scope.cart.splice(i, 1);
        flag = false
      }
    }
    if (flag) {
    $scope.cart.push({accessory:option});
}
  }



  $scope.deleteCart = function(id, i) {
    var removeItem = $scope.data.splice(i, 1)
    mainService.deleteCart(id).then(function(){

    }, function(err) {
      $scope.data.splice(i, 0, removedItem[0]);
    });
  }

  $scope.getCart = function(results) {
    $scope.cart = [];
    // mainService.getCart().then(function(results) {
    //   console.log("postcart", results.data)
    //   $scope.cart = results.data
    // })
  }
  $scope.getCart();

  $scope.getTotal = function(obj) {
    $scope.cart.filter(function(obj) {
      $scope.total = obj.accessory.price
      console.log(obj)
    })


  }
$scope.getTotal()

})

  //
  // $scope.getCart()



  // $scope.changeCart() = function( item, i ) {
  //   mainService.changeCart( item );
  //   $scope.data = item
  // }
