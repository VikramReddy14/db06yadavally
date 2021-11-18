var express = require('express');
const motels_controlers= require('../controllers/motels'); 
var router = express.Router();

/* GET home page. */
router.get('/', motels_controlers.motelss_view_all_Page);

/* GET detail motelss page */ 
router.get('/detail', motels_controlers.motelss_view_one_Page); 
/* GET create motelss page */ 
router.get('/create', motels_controlers.motelss_create_Page); 
/* GET create motelss update page */ 
router.get('/update', motels_controlers.motelss_update_Page);
/* GET create motelss delete page */ 
router.get('/delete', motels_controlers.motelss_delete_Page);  
module.exports = router;