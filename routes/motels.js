var express = require('express');
const motel_controlers= require('../controllers/motels'); 
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => {
    console.log(req)
    if (req.user){ 
      return next(); 
    }
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET home page. */
router.get('/', motel_controlers.motelss_view_all_Page);

router.get('/detail', motel_controlers.motelss_view_one_Page); 

router.get('/create',secured, motel_controlers.motelss_create_Page); 

router.get('/update',secured,motel_controlers.motelss_update_Page);

router.get('/delete',secured, motel_controlers.motelss_delete_Page);

module.exports = router;