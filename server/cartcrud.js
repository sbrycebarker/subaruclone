var Cart = require('./cart.js');

module.exports = {

read: function(req, res, next) {
  Cart.find().exec(function(err, response){
      if(err) {
        res.status(500).json(err)
      } else {
        res.json(response)
      }
    });
},

create: function(req, res, next) {
  var cart = new Cart(req.body);
  console.log("save", req.body);
    cart.save(function(err, response) {
      if (err) {
        console.log(err)
        // res.status(500).json(err);
      } else {
        console.log("cart in server", cart)
        res.status(200).json(response);
      }
    })
},


show: function(req, res, next) {
    Cart.findById(req.params.id, function(err, response){
      if(err) {
        res.status(500).json(err)
      }else{
        res.json(response)
      }
    });
},


update: function(req, res, next) {
  Cart.findByIdAndUpdate(req.params.id, req.body, function(error, response) {
    if(error) {
      return res.status(500).json(error)
    } else {
      return res.json(response)
    }
  })
},

destroy: function(req, res, next) {
  console.log(req.params.body);
  Cart.findByIdAndRemove(req.params.id, function(error, response){
    console.log(response);
    if(error) {
      return res.status(500).json(error)
    }else {
      return res.json(response)
    }
  })
}


}
