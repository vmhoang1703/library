var express = require('express');
var router = express.Router();

const siteController = require('../controllers/siteController');

router.get('/', siteController.index);

module.exports = router;
