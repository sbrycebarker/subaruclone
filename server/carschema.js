var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: { type: String},
  year: { type: Number},
  package: { type: String },
  img: {type: String},
  description: { type: String},
  price: {type: String},
  hmpg: {type: Number},
  cmpg: {type: Number},
  enginesize: {type: Number},
  awd: Boolean,
  dat: Boolean,
  bsd: Boolean,
  cvt: Boolean,
  aaw: Boolean,
  gps: Boolean,
  ltu: Boolean,
  data: { type: String},
});

module.exports = mongoose.model('cars', ProductSchema);
