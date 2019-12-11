const express = require('express');
const router = express.Router();
const favservice = require('./../services/favouriteService')
router.post('/',favourites);
router.get('/getfavourites',getfavourites);


function favourites(req,res){
    console.log('=============>favourite',req.body);

    let body = req.body;
    favservice.favouriteService(body).then((data,err)=>{
        if(err) throw err;
        res.send(data)
    }).catch((err)=>{
        res.status(400).send(err);
    })
}

function getfavourites(req,res){
    favservice.getSavedContacts().then((data,err)=>{
        if(err) throw err;
        res.send(data)
    }).catch((err)=>{
        res.status(400).send(err);
    })
}

module.exports = router;