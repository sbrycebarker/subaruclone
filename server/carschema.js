var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CarsSchema = new Schema({
  name: { type: String },
  model: { type: String },
  year: { type: Number },
  icon: { type: String },
  package: { type: String },
  img: { type: String },
  cartback: { type: String },
  buildimg1: { type: String },
  buildimg2: { type: String },
  feature1: { type: String },
  feature2: { type: String },
  feature3: { type: String },
  feature4: { type: String },
  description: { type: String },
  price: { type: String },
  cost: { type: Number },
  colors: {type: Array },
  interior: { type: Object },
  hmpg: { type: Number },
  cmpg: { type: Number },
  _id: [{ type: Schema.Types.ObjectId, ref: 'options' }],
  enginesize: { type: Number },
});

module.exports = mongoose.model('cars', CarsSchema);
