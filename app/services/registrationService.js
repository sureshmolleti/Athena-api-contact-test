const Q = require('q');
const Schema = require('./../schemas/userSchema');
const Bcrypt = require('bcryptjs')
Register = (credentials) => {
  let defer = Q.defer();
  credentials.password = Bcrypt.hashSync(credentials.password, 10);
  let register = new Schema(credentials);
  register.save((err, res) => {
    console.log("==========>entry")
    if(err){
      console.log("=========>err",err);
      defer.reject(err)
    }
    console.log("=========>result")
    defer.resolve(res)
  })

  return defer.promise;
}

module.exports = { Register };