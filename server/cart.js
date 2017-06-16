var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var cartSchema = new Schema({
  car: { type: Object},
  cart: { type: Object },
  finalprice: { type: Number },
  email: {type: Object}
});

module.exports = mongoose.model('Cart', cartSchema);
