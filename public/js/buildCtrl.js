angular.module('myApp').controller('buildCtrl', function($scope, $stateParams, mainService, $http) {

  $scope.colors = function(results) {
    mainService.colors().then(function(results) {
      let colors = results.data.colors
      console.log("colorslist", colors)
      $scope.colorlist = colors
      $scope.default = colors
      $scope.ints = results.data.interior
      $scope.chooseColor()
    })
  }
  $scope.colors()

  $scope.chooseColor = function(color) {
    console.log("default", $scope.colorlist[0].name)
    let defaultcolor = $scope.colorlist[0].name
    if (!color) {
      $scope.color = defaultcolor }
      else {
        $scope.color = color.name
      }
  }



  $scope.getOptions = function(options) {
    mainService.getOptions(options).then(function(results) {
      console.log("access", results.data)
      $scope.accessories = results.data
    })
  }
  
  $scope.vehicleData = function(response) {
    mainService.vehicleData().then(function(results) {
      console.log("car", results.data)
      $scope.vehicle = results.data
      $scope.getOptions($scope.vehicle.options)
      $scope.total = $scope.vehicle.cost += 820;
    })
  }

  $scope.vehicleData();

  $scope.carOptions = function(options) {
    mainService.carOptions(options).then(function(results) {
      // console.log("ops", results.data)
      $scope.options = results.data

    })
  }
  $scope.carOptions();

  $scope.postCart = function(data) {
    console.log("pre-data", data)
    let email = data
    let order = [];
    let cart = $scope.cart
    let finalcost = $scope.total;
    let car = $scope.vehicle.model;
    let color = $scope.color
    order.push(car, color, cart, finalcost, email)
    data = order
    console.log("car to order", data)
    // let flag = true
    // for (var i  = 0; i < $scope.finalorder.length; i++){
    //   if ($scope.order[0]._id === $scope.finalorder[0]._id){
    //     console.log("ALREADY THERE")
    //     flag = false
    //   }
    //
    mainService.postCart(data)
    $scope.order = order
  }



  $scope.addOption = function(option) {
    console.log("adding", option)
    let flag = true
    for (var i = 0; i < $scope.cart.length; i++) {
      if (option._id[0] === $scope.cart[i].accessory._id[0]) {
        console.log("matchfound")
        $scope.cart.splice(i, 1);
        $scope.total -= option.price
        flag = false
      }
    }
    if (flag) {
      $scope.cart.push({
        accessory: option
      });
      $scope.total += option.price;
    }
  }
  $scope.deleteCart = function(id, i) {
    var removeItem = $scope.data.splice(i, 1)
    mainService.deleteCart(id).then(function() {}, function(err) {
      $scope.data.splice(i, 0, removedItem[0]);
    });
  }
  $scope.getCart = function(results) {
    $scope.cart = []
  }
  $scope.getCart();
  $scope.getOrder = function(order) {
    mainService.getOrder().then(function(order) {
      $scope.finalorder = order.data[0]
    })
  }
  $scope.getOrder();


})
