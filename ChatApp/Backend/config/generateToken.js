const jwt = require('jsonwebtoken')

const generateToken = async (data) => {
    const token = jwt.sign(data, process.env.JWT_SECRET) //Always use payload as an object,otherwise you will not able to expires token
    return token
}
module.exports = generateToken