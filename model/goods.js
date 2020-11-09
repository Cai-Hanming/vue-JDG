var mongoose = require('mongoose')

module.exports = mongoose.model('goods',new mongoose.Schema({
    name:String,
    img:String,
    desc:String,//商品描述
    cate:String,//所属品类
    rank:Number,//竞价排名
    pirce:String,
    create_time:Number,
    hot:Boolean
}))


