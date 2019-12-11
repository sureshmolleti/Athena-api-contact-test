const express = require('express');
var router = express.Router();
const loginService = require('./../services/loginService');
router.post('/', login);

function login(req, res) {
    let body = req.body;
    loginService.Login(body).then((data, err) => {
        if (err) {
            console.log('err=====>', err);
        } else {
            res.send(data)
        }
    })
}

module.exports = router;