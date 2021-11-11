var motels = require('../models/motels'); 
 
// List of all motels

exports.motels_list = async function(req, res) { 
    try{ 
        themotels = await motels.find(); 
        res.send(themotels); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// for a specific motels. 
exports.motels_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: motels detail: ' + req.params.id); 
}; 
 
// Handle motels create on POST. 
exports.motels_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: motels create POST'); 
}; 
 
// Handle motels delete form on DELETE. 
exports.motels_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: motels delete DELETE ' + req.params.id); 
}; 
 
// Handle motels update form on PUT. 
exports.motels_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: motels update PUT' + req.params.id); 
};

exports.motels_view_all_Page = async function(req, res) { 
    try{ 
        themotels = await motels.find(); 
        res.render('motels', { title: 'motels Search Results', results: themotels }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume create on POST. 
exports.motels_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new motels(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    console.log('the first'+req.body.motelRatings)
    console.log('the second'+ req.body.motelCost)
    document.motelRatings = req.body.motelRatings;
    console.log(document.motelRatings)
    document.motelCost = req.body.motelCost; 
    document.motelFacility = req.body.motelFacility; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};