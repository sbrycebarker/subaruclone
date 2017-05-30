angular.module('myApp').service('mainService', function($http, $stateParams) {

  this.getCars = function(cars) {
    // console.log(car)
    return $http({
      method: 'GET',
      url: '/getCars'

    })
  }
  this.getOptions = function (data) {
    return $http({
      method: "GET",
      url:'/getCars/' + $stateParams.options
    })
  }
  this.getCart = function(cars) {
    return $http({
      method: 'GET',
      url: '/getCart'
    })
  }
  this.postCart = function(data) {
    return $http({
      method: 'POST',
      url: '/postCart',
      data: data
    })
  }

  this.vehicleData = function (data) {
    return  $http({
    method: "GET",
    url:'/getCars/' + $stateParams.vehicle
  })
}

  // this.deleteCart = function(id) {
  //   return $http({
  //     method: 'DELETE',
  //     url:'/delete' + id
  //   })
  // }
  this.changeCart = function(item) {
    return $http({
      method: 'PUT',
      url: '/change' + item.id,
      data: item
    })
  }


})
