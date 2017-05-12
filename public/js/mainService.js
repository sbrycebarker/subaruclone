angular.module('myApp').service('mainService', function($http) {

  this.getCars = function(cars) {
    return $http({
      method: 'GET',
      url: '/getCars'

    })
  }

})
