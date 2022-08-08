const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            user_name: user.user_name,
            user_email: user.user_email,
            isAdmin: user.isAdmin,
        },
            process.env.JWT_KEY || 'secret',
        {
            expiresIn: '7d'
        }
    )
};

const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(authorization){
        const token = authorization.slice(7, authorization.length);
        jwt.verify(token, procee.env.JWT_KEY || 'secret', (error, decode) => {
            if(error){
                res.status(401).send({msg:'Invalid token'})            
            }else{
                req.user = decode;
                next();
            }
        })
    }else{
        res.status(404).send({msg:'Not Token'})
    }
}

module.exports = {
    generateToken,
    isAuth
}