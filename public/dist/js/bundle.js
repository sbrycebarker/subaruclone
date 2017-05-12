'use strict';

angular.module('myApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/');
  $stateProvider.state('home', {
    url: '/',
    templateUrl: "../views/main.html",
    controller: 'mainCtrl'
  }).state('vehicles', {
    url: '/vehicles/:vehicle',
    templateUrl: "../views/cars.html",
    controller: 'mainCtrl'
  });
});
'use strict';

angular.module('myApp').directive('tasks', function () {
    return {
        restrict: 'E',
        template: '\n    <div class="vehiclelist" style:" margin: 0;">\n    <div class="vehicle" ui-sref="vehicles({vehicle: \'brz\'})">BRZ</div>\n\n    <div class="options" ui-sref="all">All Vehicles</div>\n\n\n    </div> '
    };
});
'use strict';

angular.module('myApp').controller('mainCtrl', function ($scope, mainService) {
  $scope.showmenu = false;
});
'use strict';

angular.module('myApp').service('mainService', function ($http) {});
//# sourceMappingURL=bundle.js.map
