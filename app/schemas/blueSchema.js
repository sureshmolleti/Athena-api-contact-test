var mongoose = require('mongoose');

var blueSchema = new mongoose.Schema({
    scCountry: { type: String },
    scImt: { type: String },
    scIot: { type: String },
    scVisibility: { type: String },
    crmPreference: { type: String },
    prospectReachLicenseUrl: { type: String },
    serial: { type: String },
    userId: { type: String },
    reportingmanagerId: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    empCountryCode: { type: String },
    empImt: { type: String },
    empIot: { type: String }
})

module.exports = mongoose.model('blueData', blueSchema);