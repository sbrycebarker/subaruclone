let Cart = require('./cart.js');
const sgMail = require('@sendgrid/mail');

let process = require ('./sendgrid.js')

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
  console.log("stuff", req.body)
  var car = req.body[0];
  var finalprice = req.body[3];
  var color = req.body[1]
  var cart = req.body[2];
  var email = req.body[4]
  // console.log("car data", req.body)
  var cart = new Cart({car, color, cart, finalprice, email})
    cart.save(function(err, response) {
      if (err) {
        // console.log(err, response)
        res.status(500).json(err);
      } else {
        // console.log("response", response)
        // console.log("cart in server", req.body)
        res.status(200).json(req.body);
      }
    })
    let order = require('./email.js')
    sgMail.setApiKey(process.SENDGRID_API_KEY);
    console.log("email", email, car)
      const msg = {
        to: email,
        from: 'sbrycesti@gmail.com',
        subject: 'Your Subaru has been ordered',
        text: 'A representative from Subaru will contact you when your car arrives to confirm the order of your ' + car,
        html: order
      };
  sgMail.send(msg);

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
  // console.log(req.params.body);
  Cart.findByIdAndRemove(req.params.id, function(error, response){
    // console.log(response);
    if(error) {
      return res.status(500).json(error)
    }else {
      return res.json(response)
    }
  })
}
// Closures, promises, context, apply/call/bind, this, prototypes

}
