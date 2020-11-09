var mongoose = require('mongoose')

module.exports = mongoose.model('routers',new mongoose.Schema({
    id:String,
    cate_zh:String,
    cate:String
}))