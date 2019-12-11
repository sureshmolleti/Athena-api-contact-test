const Q = require('q');
const request = require('request');
var parseString = require('xml2js').parseString;
var blueSchema = require('./../schemas/blueSchema');
var finalArray = [];
var getUserData = (param) => {
    let defer = Q.defer();
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Connection: 'keep-alive',
        Accept: 'application/json'
    }
    request.get({
        url: `https://hou02ld00030.podc.sl.dst.ibm.com/core_service_user_profile/_design/api_current/_search/ibmer_with_cs_profile?q=userId:${param}&include_docs=true`,
        rejectUnauthorized: false,
        headers: headers
    }, (err, body, response) => {
        if (err) {
            defer.reject({ msg: 'Something error occured' })
        }
        defer.resolve(JSON.parse(response));
    })

    return defer.promise;
}

getUsers = () => {
    let defer = Q.defer();

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Connection: 'keep-alive',
        Accept: 'application/json'
    }
    request.get({
        url: `https://bluepages.ibm.com/tools/groups/groupsxml.wss?task=listMembers&group=athena_users_dev`,
        rejectUnauthorized: false,
        headers: headers,
        json: true,
    }, (err, body, response) => {
        if (err) {
            defer.reject(err);
        }
        let xmlRes = response;
        parseString(xmlRes, function (err, result) {
            defer.resolve(result)
        });
    })

    return defer.promise;
}

function blueGroupUsers() {
    let defer = Q.defer();
    getUsers().then((data, err) => {
        if (err) {
            defer.reject(err);
        }
        // console.log("data====>", data);
        let memberLength = data.group.member.length;
        data.group.member.map((d, i) => {
            getUserData(d).then((data, err) => {
                if (err) throw err;
                finalArray.push(data);
                if (memberLength == finalArray.length) {
                    let mongoData = insertedData();
                    blueSchema.insertMany(mongoData,(err,results)=>{
                        if(err) throw err;
                        defer.resolve(results);
                    })
                   console.log("==============>mongoData",mongoData);
                }
            }).catch((err) => {

                console.log("errr==>", err);
            });
        })
    })


    return defer.promise;

}

var insertedData = () => {
    let data = [];
     finalArray.map((d, i) => {
        if (d.rows.length != 0) {
            d.rows.map(doc => {
                data.push(
                    {
                        scCountry: doc.doc.scCountry,
                        scImt: doc.doc.scImt,
                        scIot: doc.doc.scIot,
                        scVisibility: doc.doc.scVisibility,
                        crmPreference: doc.doc.crmPreference,
                        prospectReachLicenseUrl: doc.doc.prospectReachLicenseUrl,
                        serial: doc.doc.serial,
                        userId: doc.doc.userId,
                        reportingmanagerId: doc.doc.reportingmanagerId,
                        firstName: doc.doc.firstName,
                        lastName: doc.doc.lastName,
                        empCountryCode: doc.doc.empCountryCode,
                        empImt: doc.doc.empImt,
                        empIot: doc.doc.empIot
                    }
                )
            })

            //console.log("================>array",value)
        }
    })
    return data;
}

module.exports = { getUsers, getUserData, blueGroupUsers }