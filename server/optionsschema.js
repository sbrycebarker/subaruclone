var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var optionsSchema = new Schema({
  accessory: { type: String },
  // accessories: [{ type: mongoose.Schema.Types.Array, ref : 'options' }],
  package: { type: String },
  img: { type: String },
  info: { type: String },
  price: { type: Number },
});

module.exports = mongoose.model('options', optionsSchema);
