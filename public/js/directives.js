angular.module('myApp').directive('tasks', function() {
  return {
      restrict: 'E',
      template: `
    <div class="vehiclelist" style:" margin: 0;">
    <div class="vehicle" ui-sref="vehicles({vehicle: 'brz'})">BRZ</div>

    <div class="options" ui-sref="all">All Vehicles</div>


    </div> `
   }

  })
