var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var optionsSchema = new Schema({
  accessory: { type: String },
  // cars: [{ type: mongoose.Schema.Types.ObjectId, ref : 'cars' }],
  package: { type: String },
  img: { type: String },
  info: { type: String },
  price: { type: Number },
});

module.exports = mongoose.model('options', optionsSchema);
