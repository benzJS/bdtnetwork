const Campaign = require('../models/campaign.model');
const Network = require('../models/network.model');

const app = require('../app');

module.exports.get = async (req, res, next) => {
    const campaigns = await Campaign.find(req.query).select('-__v').populate('network', 'name');
    const networks = await Network.find().select('name');
    res.status(200).json({
        success: true,
        message: `Get ${req.baseUrl} data successfully!`,
        data: { campaigns: campaigns.map(doc => doc._doc), networks }
    });
}

module.exports.post = async (req, res, next) => {
    try {
        const campaign = await Campaign.create(req.body);
        app.io.emit('new campaign', campaign);
        res.status(200).json({
            success: true,
            message: 'Insert Campaign successfully!',
            data: campaign
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

module.exports.put = async (req, res, next) => {
    try {
        const updatedCampaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.status(200).json({
            success: true,
            message: 'Update Campaign succesfully!',
            data: updatedCampaign
        });
        return;
    } catch(err) {
        res.status(400).json({
            success: false,
            message: 'Update failed'
        })
    }
}

module.exports.delete = async (req, res, next) => {
    try {
        const deletedCampaign = await Campaign.findByIdAndDelete(req.params.id);
        app.io.emit('delete campaign', deletedCampaign);
        res.status(200).json({
            success: true,
            message: 'Delete Campaign succesfully!',
            data: deletedCampaign
        });
        return;
    } catch(err) {
        res.status(400).json({
            success: false,
            message: 'Delete failed'
        })
    }
}