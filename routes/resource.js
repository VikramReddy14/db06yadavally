var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var motels_controller = require('../controllers/motels'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// motels ROUTES /// 
 
// POST request for creating a motels.  
router.post('/motelss', motels_controller.motels_create_post); 
 
// DELETE request to delete motels. 
router.delete('/motelss/:id', motels_controller.motels_delete); 
 
// PUT request to update motels. 
router.put('/motelss/:id', 
motels_controller.motels_update_put); 
 
// GET request for one motels. 
router.get('/motelss/:id', motels_controller.motels_detail); 
 
// GET request for list of all motels items. 
router.get('/motelss', motels_controller.motels_view_all_Page); 
 
module.exports = router; 