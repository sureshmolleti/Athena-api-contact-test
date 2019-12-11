const Q = require('q');
const favSchema = require('./../schemas/favoritesSchema');

favouriteService = (fav) => {
    let defer = Q.defer();
    fav.flag = true;
    console.log("==========>fav in service", fav);
    favSchema.find({ favouriteId: fav.favouriteId, flag: true }, (err, doc) => {
        if (err) throw err;
        if (doc && doc.length == 0) {
            let schema = new favSchema(fav);
            schema.save().then((data) => {
                defer.resolve(data);
            }).catch((err) => {
                defer.reject(err);
            })
        } else {
            console.log("============>documents", doc);
            let data = doc;
            favSchema.updateOne({ _id: doc[0]._id }, { $set: { "endDate": new Date(), "flag": false } }, (err, doc) => {
                if (err) throw err;
                defer.resolve({ userId: data[0].userId, favouriteId: data[0].favouriteId, flag: false, startDate: data[0].startDate, endDate: new Date() });
            }).catch((err) => {
                defer.reject(err);
            })
        }
    }).catch((err) => {
        defer.reject(err);
    })




    return defer.promise;
}


function getSavedContacts() {
    let defer = Q.defer();
    favSchema.find({}, (err, res) => {
        if (err) throw err;
        defer.resolve({ msg: 'success', data: res })
    }).sort({ startDate: -1 }).limit(2);

    return defer.promise;
}

module.exports = { favouriteService,getSavedContacts}