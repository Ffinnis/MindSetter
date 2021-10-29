const jwt = require('jsonwebtoken')

const generateJwt = (id, username) => {
    return jwt.sign(
        {id: id, username: username},
        process.env.SECRET_KEY,
        {expiresIn: '7d'}
    )
}

module.exports = generateJwt