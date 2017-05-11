var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: { type: String},
  package: { type: String },
  imgurl: {type: String},
  description: { type: String},
  price: {type: String},
  mpg: {type: Number},
  enginesize: {type: Number},
  awd: Boolean,
  dat: Boolean,
  bsd: Boolean,
  cvt: Boolean,
  aaw: Boolean,
  gps: Boolean,
  ltu: Boolean,
});

module.exports = mongoose.model('cars', ProductSchema);
