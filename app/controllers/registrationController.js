const express = require('express');
var router = express.Router();
const registerService = require('./../services/registrationService');
router.post('/', registration);

function registration(req, res) {
    let body = req.body;
    registerService.Register(body).then((data, err) => {
        console.log('=========>body', body)
        if (err) {
            console.log('err=====>', err);
        } else {
            res.send(data)
        }
    })
}

module.exports = router;