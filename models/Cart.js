const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: 'item'
    },
    quantity: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Cart = mongoose.model('cart', CartSchema);