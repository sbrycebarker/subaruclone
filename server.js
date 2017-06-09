const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      cors = require('cors'),
      moment = require('moment'),
      foundation = require('foundation-cli'),
      mongoose =require('mongoose'),
      MongoStore = require('connect-mongo')(session),
      request = require('request');

      var app = express();



      app.use(bodyParser.json())
      app.use(cors());

      var cart = require('./server/cartcrud')
      var cars = require('./server/carcrud')
      var options = require('./server/optionscrud')

      app.get('/getCars', cars.read);
      app.get('/getCars/:id', cars.show);

      // app.post('/getOptions', options.read);
      app.post('/getOptions', options.show);
      app.get('/getOptions/:id', options.show);

      app.get('/getCart', cart.read);
      // app.get('/getCart/:id', cart.show);
      app.post('/postCart', cart.create);
      app.put('/postcart/:id', cart.update);
      app.delete('/deletecart/:id', cart.destroy);

      // app.use(express.session({
      //   secret: 'foo',
      //   store: new MongoStore(options)
      // }));


      mongoose.connect('mongodb://sbrycebarker:serg1234@ds129030.mlab.com:29030/subaru', function(err) {
          if (err) throw err;
      });

      // app.use(session({
      //   store: new MongoStore({ mongooseConnection: mongoose.connection })
      // }))




      app.use(express.static('./public'))

            var port = 3030


        app.listen(port, function() {

          console.log("listining on port " + port)

        })
