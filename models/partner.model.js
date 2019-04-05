const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
    username: String,
    password: String,
    fullname: String,
    date: { type: Date, default: new Date },
    credit: String,
    state: Boolean,
    role: { type: String, deafault: 'mem' }
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;