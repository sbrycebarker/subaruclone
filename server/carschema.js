var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CarsSchema = new Schema({
  name: { type: String },
  model: { type: String },
  year: { type: Number },
  icon: { type: String },
  package: { type: String },
  img: { type: String },
  buildimg1: { type: String },
  buildimg2: { type: String },
  feature1: { type: String },
  feature2: { type: String },
  feature3: { type: String },
  feature4: { type: String },
  description: { type: String },
  price: { type: String },
  cost: { type : Number },
  hmpg: { type: Number },
  cmpg: { type: Number },
  accessory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'options' }],
  enginesize: { type: Number },
  awd: Boolean,
  dat: Boolean,
  bsd: Boolean,
  cvt: Boolean,
  aaw: Boolean,
  gps: Boolean,
  ltu: Boolean,
});

module.exports = mongoose.model('cars', CarsSchema);
