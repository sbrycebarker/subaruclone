angular.module('myApp').service('mainService', function($http, $stateParams) {

  this.getCars = function(cars) {
    // console.log(car)
    return $http({
      method: 'GET',
      url: '/getCars'
    })
  }

  this.getOptions = function (data) {
    console.log(data)
    return $http({
      method: "POST",
      url:'/getOptions/',
      data: data
    })
  }
  //
  // this.getCart = function(cars) {
  //   return $http({
  //     method: 'GET',
  //     url: '/getCart'
  //   })
  // }
  // this.postCart = function(data) {
  //   return $http({
  //     method: 'POST',
  //     url: '/postCart',
  //     data: data
  //   })
  // }

  this.vehicleData = function (data) {
    return  $http({
    method: "GET",
    url:'/getCars/' + $stateParams.vehicle
  })
}

this.colors = function(color) {
  return $http({
    method: "GET",
    url: '/getCars/' + $stateParams.vehicle
  })
}

this.carOptions = function (access) {
  console.log(access)
  return $http({
    method: "GET",
    url: "/getOptions/" + $stateParams.id
  })
}
  // this.deleteCart = function(id) {
  //   return $http({
  //     method: 'DELETE',
  //     url:'/delete' + id
  //   })
  // }


})
