angular.module('myApp')

.directive('tasks', function() {
  return {
      restrict: 'E',
      templateUrl: "./views/cardropdown.html"
   }

 })

 .directive('pop', function(){
   $(".email").keydown(function(event){
   if(event.keyCode == 13){
     console.log("getting band")
       $(".submit").click();
   }
 });
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
