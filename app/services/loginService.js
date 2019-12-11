const Q = require('q');
const Schema = require('./../schemas/userSchema');
const Bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
var secret="!@#DWe$%^gge&&**";

Login = (credentials) => {
    let defer = Q.defer();
    Schema.findOne({email:credentials.email},(err,data)=>{
        console.log('credential for login',data)
        if(err){
        }
        if(data){
           if(!Bcrypt.compareSync(credentials.password,data.password)){
               defer.reject({error:true,msg:'invalid password'})
           }else{
               delete data.password;
               let token = jwt.sign({sub:data._id},secret);
               defer.resolve({token:token,data:data})
           }
        }
    })
    return defer.promise;
}

module.exports = {Login};