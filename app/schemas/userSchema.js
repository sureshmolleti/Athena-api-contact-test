var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    userName:{type:String,required:true},
    password:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    mobile:{type:String,required:true}

})

module.exports = mongoose.model('users',userSchema);