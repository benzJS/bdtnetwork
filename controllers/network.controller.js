const Network = require('../models/network.model');

module.exports.get = async (req, res, next) => {
    // const query = Object.keys(req.query).map(key => {
    //     return {
    //         `${key}`: key
    //     }
    // })
    const networks = await Network.find(req.query).select('-__v');
    res.status(200).json({
        success: true,
        message: `Get ${req.baseUrl} data successfully!`,
        data: networks.map(doc => doc._doc)
    });
}

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

module.exports.delete = async (req, res, next) => {
    try {
        const deletedNetwork = await Network.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Delete network succesfully!',
            data: deletedNetwork
        });
        return;
    } catch(err) {
        res.status(400).json({
            success: false,
            message: 'Delete failed'
        })
    }
}