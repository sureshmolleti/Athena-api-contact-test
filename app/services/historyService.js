const Q = require('q');
const historySchema = require('./../schemas/historySchema');

historyService = (history) => {
    let defer = Q.defer();

    historySchema.findOneAndUpdate({userId:history.userId, recent_uid: history.recent_uid }, { $set: { "endDate": new Date() } }, (err, doc) => {
        if (doc == null) {
            let schema = new historySchema(history);
            schema.save().then((saved, err) => {
                console.log("==========>history", err,saved);
                defer.resolve(saved);
            }).catch((err) => {
                defer.reject(err);
            })
        }else{
            defer.resolve(doc);
        }
       
    }).catch((err) => {
        defer.reject(err);
    })



    return defer.promise;
}

module.exports = { historyService }