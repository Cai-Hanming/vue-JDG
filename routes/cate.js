var express = require('express');
var router = express.Router();

var catesModel = require('../model/cates')
// var goodModel = require('../model/goods')

router.get('/cates',function(req,res){
    console.log(req.query)
    catesModel.find().then(arr=>{
        res.json({
            err:0,
            msg:'zhe shi cates',
           
            data:arr
        })
    })
    // res.json({
    //     err:2
    // })
})

module.exports = router