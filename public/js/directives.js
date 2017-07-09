angular.module('myApp').directive('tasks', function() {
  return {
      restrict: 'E',
      templateUrl: "./views/cardropdown.html"
   }

 })

 .directive('pop', function(){
   return {
     restrict: 'E',
     templateUrl: "./views/finalorder.html"
   }
 })

 .directive('ty', function() {
   return {
     restrict: 'E',
     templateUrl: "./views/thankyou.html"
   }
 })
