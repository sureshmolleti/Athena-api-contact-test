const express = require('express');
const router = express.Router();
const historyService = require('./../services/historyService')
router.post('/',recentHistory);


function recentHistory(req,res){
    
    let body = req.body;
    historyService.historyService(body).then((data,err)=>{
        console.log('=============>historycontroller',data,err);
        if(err) throw err;
        res.send(data)
    }).catch((err)=>{
        res.status(400).send(err);
    })
}

module.exports = router;