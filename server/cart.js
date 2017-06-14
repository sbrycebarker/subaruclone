var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var cartSchema = new Schema({
  car: { type: Array},
  cart: { type: Array },
  finalprice: { type: Array },
});

module.exports = mongoose.model('Cart', cartSchema);
