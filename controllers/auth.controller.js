const jwt = require('jsonwebtoken');
require('dotenv').config();

const Partner = require('../models/partner.model');

module.exports.signup = async (req, res, next) => {
    const { username, password } = req.body;
    if(username && password) {
        const partner = await Partner.create(req.body);
        const token = jwt.sign(partner, process.env.JWT_SECRET, { expiresIn: '60s' });
        return res.json({
            success: true,
            message: 'Authentication Successful!',
            token
        });
    }
    return res.status(400).json({
        success: false,
        message: 'Authentication failed! Please check the request'
    })
}

module.exports.signin = async (req, res, next) => {
    const { username, password } = req.body;
    if(username && password) {
        return Partner.findOne({ username, password }).select('-password').exec((err, partner) => {
            if(!partner) {
                return res.status(403).json({
                    success: false,
                    message: 'Incorrect username or password'
                });
            }
            const token = jwt.sign(partner._doc, process.env.JWT_SECRET, { expiresIn: '60s' });
            return res.json({
                success: true,
                message: 'Authentication Successful!',
                token
            });
        });
    }
    return res.status(400).json({
        success: false,
        message: 'Authentication failed! Please check the request'
    })
}