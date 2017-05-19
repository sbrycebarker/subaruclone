var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: { type: String},
  model: { type: String},
  year: { type: Number},
  icon: { type: String},
  package: { type: String },
  img: {type: String},
  buildimg1: { type: String },
  buildimg2: { type: String },
  feature1: { type: String },
  feature2: { type: String },
  feature3: { type: String },
  feature4: { type: String },
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

module.exports = mongoose.model('cart', ProductSchema);
