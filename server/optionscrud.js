var option = require('./optionsschema.js');

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
  var id = "5928a3b3734d1d687a57c228";
  console.log("show", req.params)
    option.findById(req.params.id, function(err, response){
      console.log(req.params)
      if(err) {
        res.status(500).json(err)
      }else{
        res.json(response)
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
  console.log(req.params.body);
  option.findByIdAndRemove(req.params.id, function(error, response){
    console.log(response);
    if(error) {
      return res.status(500).json(error)
    }else {
      return res.json(response)
    }
  })
}


}
