const Network = require('../models/network.model');

module.exports.post = async (req, res, next) => {
    try {
        const network = await Network.create(req.body);
        res.status(200).json({
            success: true,
            message: 'Insert network successfully!',
            data: network
        });
        return;
    } catch(err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: err
        });
    }
}