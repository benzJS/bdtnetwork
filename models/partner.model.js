const mongoose = require('mongoose');

const moment = require('moment');

const partnerSchema = new mongoose.Schema({
    username: String,
    password: String,
    fullname: String,
    date: { type: Date, default: new Date },
    credit: String,
    state: { type: Boolean, default: true },
    role: { type: String, deafault: 'mem' }
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;

// Partner.findOne().exec((err, data) => console.log(err ? err : data)