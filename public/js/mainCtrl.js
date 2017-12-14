angular.module('myApp').controller('mainCtrl', function($scope, $stateParams, mainService, $http) {

// <<=====================================DROPDOWN==================================================>>

  function boxCloser(event){

  $(html, body).click(function() {
      console.log("CLICKY")
      $(".dropdown").hide();
      $(".dropdown-content").removeClass("show");

      })

  }

  // <<=====================================API CALLS==================================================>>

//   function getLocation() {
// 	// console.log("pow")
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//         console.log(x.innerHTML)
//     }
//
// }
// function showPosition(position) {
//     var x = position.coords.latitude;
//
//     var y = position.coords.longitude;
//   	// console.log(x)
//   	// console.log(y)
//     $scope.x = x
//     $scope.y = y
//     $scope.zip()
// }
  $scope.getCoOrd = function() {
    mainService.getCoOrd().then(function(latlng) {
      $scope.x = latlng.data.location.lat
      $scope.y = latlng.data.location.lng
      $scope.getZip()
    })
  }
  $scope.getCoOrd()

  $scope.getZip = function() {
    var x = $scope.x
    var y = $scope.y
    mainService.getZip(x , y).then(function(zip) {
      console.log(zip.data.results[0].address_components[5].short_name)
      var zip = zip.data.results[0].address_components[5].short_name
      if (!zip) {
        $scope.zip = zip.data.results[0].address_components[7].short_name
      } else {
      $scope.zip = zip
    }
    })
  }

  $scope.getCars = function(results) {
    mainService.getCars().then(function(results){
      console.log("cars", results.data)
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

  $scope.showmenu = true;
  $scope.orderpop = false;
  $scope.ty = false

})
