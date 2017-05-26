var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: { type: String },
  model: { type: String },
  year: { type: Number },
  accessory: { type: String },
  package: { type: String },
  img: { type: String },
  info: { type: String },
  price: { type: Number },
  hmpg: { type: Number },
  cmpg: { type: Number },
  enginesize: { type: Number },
  awd: Boolean,
  dat: Boolean,
  bsd: Boolean,
  cvt: Boolean,
  aaw: Boolean,
  gps: Boolean,
  ltu: Boolean,
});

module.exports = mongoose.model('options', ProductSchema);
