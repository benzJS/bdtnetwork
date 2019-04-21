const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    network: { type: Schema.Types.ObjectId, ref: 'Network' },
    note: String,
    point: {
        type: Number,
        required: true
    },
    state: { type: Boolean, default: 1 }
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;