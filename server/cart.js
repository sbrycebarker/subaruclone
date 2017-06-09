var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var cartSchema = new Schema({
  _id: { type: String},
  accessory: { type: String },
  // car:{type:}
  package: { type: String },
  price: { type: Number },
  transmission: { type: String },
  color: { colorid:'String',name:'String', _id:'String' },
});

module.exports = mongoose.model('cart', cartSchema);
