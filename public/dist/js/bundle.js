'use strict';

angular.module('myApp', ['ui.router']).config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.when('', '/');
  $stateProvider.state('home', {
    url: '/',
    templateUrl: "./views/main.html",
    controller: 'mainCtrl'
  });
});
'use strict';

angular.module('myApp').controller('mainCtrl', function ($scope, mainService) {});
'use strict';

angular.module('myApp').service('mainService', function ($http) {});
//# sourceMappingURL=bundle.js.map
