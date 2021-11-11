const mongoose = require("mongoose") 
const motelsSchema = mongoose.Schema({ 
    motelRatings: String, 
    motelCost: Number, 
    motelFacility: String 
}) 
 
module.exports = mongoose.model("models", 
motelsSchema)