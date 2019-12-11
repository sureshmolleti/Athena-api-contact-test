const express = require('express');
const router = express.Router();
const blueService = require('./../services/bluegroupUsers_service');
router.get('/',blueUser);
router.get('/group',blueGroup);
router.get('/blueArray',blueArray);

function blueGroup(req,res){

    blueService.getUsers().then((data,err)=>{
        if(err){
            res.send(err).status(400);
        }
        res.send(data)
    })
}

function blueUser(req,res){

    blueService.getUserData(req.body.user).then((data,err)=>{
        if(err){
            res.send(err).status(400);
        }
        res.send(data)
    })
}

function blueArray(req,res){
    blueService.blueGroupUsers().then((err,data)=>{
        console.log('==============>blue Array',err,data);
        if(err){
            res.send(err);
        }
        res.send(data);
    })
}

module.exports = router;