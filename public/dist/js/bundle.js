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

var cars = require('./models.js');

module.exports = {

  read: function read(req, res, next) {
    cars.find().exec(function (err, response) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(response);
      }
    });
  }
};
'use strict';

angular.module('myApp').controller('mainCtrl', function ($scope, mainService) {});
'use strict';

angular.module('myApp').service('mainService', function ($http) {});
'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: { type: String },
  imgurl: { type: String },
  description: { type: String },
  price: { type: String }
});

module.exports = mongoose.model('cars', ProductSchema);
//# sourceMappingURL=bundle.js.map
