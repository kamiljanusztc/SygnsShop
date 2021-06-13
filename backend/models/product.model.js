const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  price: { type: Number },
  image: { type: Array },
});

module.exports = mongoose.model('Product', productSchema);
