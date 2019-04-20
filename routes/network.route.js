const express = require('express');
const router = express.Router();

const controller = require('../controllers/network.controller');

router.post('/', controller.post);

router.put('/:id', controller.put);

router.get('/', controller.get);

router.delete('/:id', controller.delete);

module.exports = router;