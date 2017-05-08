const express = require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      cors = require('cors'),
      moment = require('moment'),
      request = require('request');

      var app = express()
      app.use(cors());
      app.use(bodyParser.json())
