var express = require('express');
const motels_controlers= require('../controllers/motels'); 
var router = express.Router();

/* GET home page. */
router.get('/', motels_controlers.motelss_view_all_Page);

module.exports = router;