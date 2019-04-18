const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conversionSchema = new Schema({
    partner: { type: Schema.Types.ObjectId, ref: 'Partner' },
    date: { type: Date, default: new Date },
    ip: String,
    userAgent: String,
    os: String,
    country: String
});

const Conversion = mongoose.model('Conversion', conversionSchema);

module.exports = Conversion;