var jwt = require('jsonwebtoken')

function createToken(data){
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7),
        data
      }, 'five');
}

// 验证token
function verifyToken(req, res) {
    return new Promise(function(resolve, reject) {
        try {
        var token = req.headers.authorization
        console.log(req.head)
        if(!token) {
            return res.json({err: -1, msg: 'token 无效'})
        } else {
            var decoded = jwt.verify(token, 'five')
            resolve(decoded.data)
        }
        } catch(err) {
        reject(err)
        }
    })
}

module.exports = {
    createToken,
    verifyToken
}
