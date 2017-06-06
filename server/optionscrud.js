var option = require('./optionsschema.js');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {

read: function(req, res, next) {
  // console.log("req.body", req.body)
  option.find().exec(function(err, response){
      if(err) {
        res.status(500).json(err)
      } else {
        res.json(response)
      }
    });
},

show: function(req, res, next) {
  const optionIds = []
  for (let key in req.body) {
    optionIds.push(ObjectId(req.body[key]))
  }
    option.find({_id: {$in: optionIds}} , function(err, response){
      // console.log("findById", response)
      if(err) {
        throw err
        return res.status(500).json(err)
      }
      if (response){
        // console.log("found", response)
        return res.send(response)
      }else{
        return res.send("No option found with that ID")
      }
    });
},

create: function(req, res, next) {
  var option = new Option(req.body);
    option.save(function(err, response) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(response);
      }
    })
},

update: function(req, res, next) {
  option.findByIdAndUpdate(req.params.id, req.body, function(error, response) {
    if(error) {
      return res.status(500).json(error)
    } else {
      return res.json(response)
    }
  })
},

destroy: function(req, res, next) {
  // console.log(req.params.body);
  option.findByIdAndRemove(req.params.id, function(error, response){
    // console.log(response);
    if(error) {
      return res.status(500).json(error)
    }else {
      return res.json(response)
    }
  })
}


}
