const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({


    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    cartItems: [
        {
            type: Object, 
            required: true             
        }
    ]


}, { timestamps: true });


module.exports = mongoose.model('Cart', cartSchema);