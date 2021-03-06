const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  attributes: {
    type: Array,
  },
  image: {
    data: Buffer, 
    contentType: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);