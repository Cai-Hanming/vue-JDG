var express = require('express');
var router = express.Router();
var jwt = require('../uitl/jwt')

var useModel = require('../model/use')

/* GET users listing. */
router.get('/add', function(req, res) {
  // res.send('respond with a resource');
  useModel.find({}).then((arr)=>{
    res.json({
      list:arr
    })
  })
});

router.post('/register',function(req,res){
  var {name,password,users} = req.body
  var user ={
    name,
    password,
    users
    // password2
  }
  if(!/^[a-zA-Z0][a-zA-Z]{2,11}$/.test(name)){
    return res.json({
      err:1,
      msg:'用户名不符合要求'
    })
  }
  if(!/^[a-zA-Z0-9\@\.\%/^]{6,18}$/.test(password)){
    return res.json({
      err:1,
      msg:'密码不安全'
    })
  }
  // if(!(password===password2)){
  //   return res.json({
  //     err:1,
  //     msg:'两次密码不相同'
  //   })
  // }
  useModel.find({name}).then((arr)=>{
    if(arr.length){
      return res.json({err:1,msg:'用户名已被占用'})
    }else{
      useModel.insertMany([user]).then(()=>{
        res.json({
          err:0,
          msg:'Success'
        })
      })
    }
  })
})

router.post('/login',function(req,res){
  var {name,password} = req.body
  if(!name){
    res.json({
      err:1,
      msg:'用户名不能为空22'
    })
  }
  if(!password){
    res.json({
      err:1,
      msg:'密码不能为空'
    })
  }
  useModel.find({name,password}).then((arr)=>{
    if(arr.length === 1){
      useModel.find({name,password}).then((arr)=>{
        res.json({
          err:0,
          meg:'success',
          data1:arr[0].users,
          data:{token:jwt.createToken({name,password})},
        })
      })
    }else{
      res.json({
        err:1,
        msg:'输入的用户名与密码不匹配'
      })
    }
  })
  
})

module.exports = router;