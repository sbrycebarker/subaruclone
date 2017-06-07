var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var cartSchema = new Schema({
  _id: { type: String},
  accessory: { type: String },
  package: { type: String },
  img: { type: String },
  info: { type: String },
  price: { type: Number },
});

module.exports = mongoose.model('cart', cartSchema);
