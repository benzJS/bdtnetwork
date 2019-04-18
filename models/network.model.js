const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const networkSchema = new Schema({
    name: String,
    type: { type: String, default: 'banner' },
    postback: String,
    iframe: String,
    response: { type: Number, default: 1 },
    pars: { type: Array, default: [] }
});

const Network = mongoose.model('Network', networkSchema);

module.exports = Network;