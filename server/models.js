var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: { type: String},
  imgurl: {type: String},
  description: { type: String},
  price: {type: String}
});

module.exports = mongoose.model('cars', ProductSchema);
