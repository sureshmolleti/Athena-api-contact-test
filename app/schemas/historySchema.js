var mongoose = require('mongoose');

var historySchema = new mongoose.Schema({
    userId:{type:String,required:true},
    startDate:{type:Date,default:new Date()},
    endDate:{type:Date,default:new Date()},
    recent_uid:{type:String,required:true}
})

module.exports = mongoose.model('history',historySchema);