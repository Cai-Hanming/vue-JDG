var mongoose = require('mongoose')

module.exports = mongoose.model('cates',new mongoose.Schema({
    id:String,
    cate_zh:String,
    cate:String
}))

