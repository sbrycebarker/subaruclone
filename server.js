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


      var cars = require('./server/cars')

      app.get('/getCars', cars.read)

      mongoose.connect('mongodb://sbrycebarker:serg1234@ds129030.mlab.com:29030/subaru', function(err) {
          if (err) throw err;
      });

      app.use(express.static('./public'))

            var port = 3030


        app.listen(port, function() {

          console.log("listining on port " + port)

        })
