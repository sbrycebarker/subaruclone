var cars = require('./models.js');

module.exports = {

read: function(req, res, next) {
  cars.find().exec(function(err, response){
    console.log(response[1])
      if(err) {
        res.status(500).json(err)
      } else {
        res.json(response)
      }
    });
}
}
