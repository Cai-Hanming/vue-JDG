var mongoose = require('mongoose')

module.exports = mongoose.model('users',new mongoose.Schema({
    name: String,
    password: String,
    create_time: Number,
    role: String,
    mobile: String,
    avatar: String,
    users:String
}))