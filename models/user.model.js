const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    partner: { type: Schema.Types.ObjectId, ref: 'Partner' },
    date: { type: Date, default: new Date },
    ip: String,
    userAgent: String,
    os: String,
    country: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;