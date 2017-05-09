const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      cors = require('cors'),
      moment = require('moment'),
      foundation = require('foundation-cli')
      request = require('request');

      var app = express()
      app.use(cors());
      app.use(bodyParser.json())


      app.use(express.static('./public'))

            var port = 3000


        app.listen(port, function() {

          console.log("listining on port " + port)

        })
