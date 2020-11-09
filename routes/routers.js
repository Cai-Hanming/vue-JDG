var express = require('express');
var router = express.Router();
var useModel = require('../model/routers')

router.get('/home',function(req,res){
    useModel.find({}).then((arr)=>{
        res.json({
            list:arr
        })
    })
})

module.exports = router