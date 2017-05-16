var cars = require('./models.js');

module.exports = {

read: function(req, res, next) {
  cars.find().exec(function(err, response){
      if(err) {
        res.status(500).json(err)
      } else {
        res.json(response)
      }
    });
},

create: function(req, res, next) {
  var car = new Car(req.body);
    cars.save(function(err, response) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    })
},

show: function(req, res, next) {
  console.log(req.params.id);
    cars.findById(req.params.id, function(err, response){
      if(err) {
        res.status(500).json(err)
      }else{
        res.json(response)
      }
    });
},

update: function(req, res, next) {
  cars.findByIdAndUpdate(req.params.id, req.body, function(error, response) {
    if(error) {
      return res.status(500).json(error)
    } else {
      return res.json(response)
    }
  })
},

destroy: function(req, res, next) {
  console.log(req.params.body);
  cars.findByIdAndRemove(req.params.id, function(error, response){
    console.log(response);
    if(error) {
      return res.status(500).json(error)
    }else {
      return res.json(response)
    }
  })
}


}
