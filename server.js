const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      cors = require('cors'),
      moment = require('moment'),
      foundation = require('foundation-cli'),
      mongoose = require('mongoose'),
      MongoStore = require('connect-mongo')(session),
      smtpapi = require('smtpapi');
      header = new smtpapi();
      request = require('request');

      // header.addTo('sbrycesti@gmail.com');
      // header.setUniqueArgs({cow: 'chicken'});
      // console.log(header.jsonString());

      var app = express();

      app.use(bodyParser.json())
      app.use(cors());



      let cart = require('./server/cartcrud')
      let cars = require('./server/carcrud')
      let options = require('./server/optionscrud')

      const sgMail = require('@sendgrid/mail');

      let process = require ('./server/sendgrid.js')


      app.get('/getCars', cars.read);
      app.get('/getCars/:id', cars.show);
      app.post('/getOptions', options.show);
      app.get('/getOptions/:id', options.show);
      app.get('/getCart', cart.read);
      app.get('/getOrder/', cart.read);
      app.post('/postCart', cart.create);
      app.put('/postcart/:id', cart.update);
      app.delete('/deletecart/:id', cart.destroy);
// sbrycebarker:serg1234@ds129030.mlab.com:29030
      mongoose.connect('mongodb://sbrycebarker:serg1234@ds129030.mlab.com:29030/subaru', {
        useMongoClient: true,
      })

      app.use(express.static('./public'))
            var port = 8083
        app.listen(port, function() {
          console.log("listining on port " + port)
        })

// Closures, promises, context, apply/call/bind, this, prototypes
