const mongoose = require('mongoose');

class mongoConnection {
    constructor(db) {
      this.db = db;
    }

    createConnection() {
        mongoose.connect(this.db,{useCreateIndex: true, useNewUrlParser: true,useFindAndModify: false }, (err, res) => {
            if (err) throw err;
            console.log('mongo connection created successfully')
        })
    }
}


const Connection = (db) =>{
  return new mongoConnection(db);
}

module.exports = Connection;