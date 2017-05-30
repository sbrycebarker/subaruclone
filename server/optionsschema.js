var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var optionsSchema = new Schema({
  _id: { type: Array, ref: 'cars'},
  accessory: { type: String },
  package: { type: String },
  img: { type: String },
  info: { type: String },
  price: { type: Number },
});

module.exports = mongoose.model('options', optionsSchema);
