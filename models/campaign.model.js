const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
    name: String,
    country: String,
    network: { type: Schema.Types.ObjectId, ref: 'Network' },
    note: String,
    point: Number,
    state: { type: Boolean, default: 1 }
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;