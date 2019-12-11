var mongoose = require('mongoose');

var favouriteSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    favouriteId:{type:String,required:true},
    startDate:{type:Date,default:new Date()},
    endDate:{type:Date,default:null},
    flag:{type:Boolean,required:true}
})

module.exports = mongoose.model('favourites',favouriteSchema);