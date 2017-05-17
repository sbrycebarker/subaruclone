angular.module('myApp').controller('mainCtrl', function($scope, mainService) {

  $scope.getCars = function(results) {
    mainService.getCars().then(function(results){
      $scope.cars = results.data
    })
  }

  $scope.getCars()

  $scope.getCart = function(results) {
    mainService.getCart().then(function(results) {
      console.log(results.data)
      $scope.cart = results.data
    })
  }

  $scope.getCart()

  $scope.postCart = function( data ) {
    mainService.postCart( data )
    $scope.data.push( data )
  }

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

})
