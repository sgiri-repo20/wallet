const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Wallet = new Schema({
    description: {
        type: String
    },
    income: {
        type: String
    },
    expense: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Wallet', Wallet);