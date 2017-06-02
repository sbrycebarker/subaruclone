const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      cors = require('cors'),
      moment = require('moment'),
      foundation = require('foundation-cli'),
      mongoose =require('mongoose'),
      request = require('request');

      var app = express()



      app.use(bodyParser.json())
      app.use(cors());

      var cart = require('./server/cartcrud')
      var cars = require('./server/carcrud')
      var options = require('./server/optionscrud')

      app.get('/getCars', cars.read);
      app.get('/getCars/:id', cars.show);
      // app.get('/getCars', options.read)

      app.get('/getCart', cart.read);

      app.post('/getOptions', options.read);
      app.get('/getOptions/:id', options.show);


      app.get('/getCart/:id', cart.show)

      // app.post('/postCart', cart.create);
      // app.put('/postcart/:id', cart.update);
      // app.delete('/deletecart/:id', cart.destroy);








      mongoose.connect('mongodb://sbrycebarker:serg1234@ds129030.mlab.com:29030/subaru', function(err) {
          if (err) throw err;
      });




      app.use(express.static('./public'))

            var port = 3030


        app.listen(port, function() {

          console.log("listining on port " + port)

        })
