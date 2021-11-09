const config = require('../config/config');
const expressJWT = require('express-jwt');

exports.midexJWT = expressJWT({
    secret: config.module.SIGNJWT,
    algorithms: ['HS256']
    }).unless({
        path: ['/account/signup','/account/login','/swagger/account/singup', '/swagger/account/login' ]
    })

exports.valitorJWT = async (err,req,res,next) => {
    if ( err.name === 'UnauthorizedError') {
        res.status(401).json('Invalid Token');
    } else {
        res.status(500)
    }
}