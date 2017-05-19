angular.module('myApp').service('mainService', function($http) {

  this.getCars = function(cars) {
    return $http({
      method: 'GET',
      url: '/getCars'

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
  //
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
