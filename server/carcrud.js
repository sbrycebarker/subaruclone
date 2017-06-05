var Car = require('./carschema.js');

module.exports = {

read: function(req, res, next) {
  Car.find().exec(function(err, response){
      if(err) {
        console.log(err)
      } else {
        res.json(response)
      }
    });
},

show: function(req, res, next) {
    Car.findById(req.params.id, function(err, response){
      if(err) {
        console.log("findById=err")
      }else{
        res.json(response)
      }
    });
},

create: function(req, res, next) {
  var Car = new Car(req.body);
    Cars.save(function(err, response) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    })
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
  // console.log(req.params.body);
  cars.findByIdAndRemove(req.params.id, function(error, response){
    // console.log(response);
    if(error) {
      return res.status(500).json(error)
    }else {
      return res.json(response)
    }
  })
}


}
