angular.module('myApp').service('mainService', function($http, $stateParams) {

  this.getCars = function(cars) {
    return $http({
      method: 'GET',
      url: '/getCars'
    })
  }

  this.getOptions = function (data) {
    return $http({
      method: "POST",
      url:'/getOptions/',
      data: data,
      controller: "buildCtrl"
    })
  }
  this.vehicleData = function (data) {
    return  $http({
    method: "GET",
    url:'/getCars/' + $stateParams.vehicle,
    controller: "buildCtrl"
  })
}

this.colors = function(color) {
  return $http({
    method: "GET",
    url: '/getCars/' + $stateParams.vehicle,
    controller: "buildCtrl"
  })
}

this.carOptions = function (options) {
  return $http({
    method: "POST",
    url: "/getOptions/",
    data: options,
    controller: "buildCtrl"
  })
}
this.getCart = function(cars) {
  return $http({
    method: 'GET',
    url: '/getCart',
    controller: "buildCtrl"
  })
}
// "_id": {
//     "$oid": "5928a3b3734d1d687a57c228"
// }

this.postCart = function(data) {
  console.log("postCart service", data)
  return $http({
    method: 'POST',
    url: '/postCart',
    data: data,
    controller: "buildCtrl"
  })
}

this.getOrder = function() {
  console.log()
  return $http({
    method: 'GET',
    url: '/getCart',
    controller: "buildCtrl"
  })
}

  this.deleteCart = function(id) {
    return $http({
      method: 'DELETE',
      url:'/delete' + id,
      controller: "buildCtrl"
    })
  }
  this.getZip = function(x , y) {
    // console.log("server", x)
    // console.log("server", y)
    return $http({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + x + ',' + y + '&sensor=false',
      controller: 'mainCtrl'
    })
  }


})
