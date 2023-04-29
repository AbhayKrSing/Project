const jwt = require('jsonwebtoken')

const verifyToken = async (token) => {
    const data = jwt.verify(token, process.env.JWT_SECRET)
    if (!data) {
        return "Not access to particular Resources,Either token invalid or not present"
    }
    return data
}

module.exports = verifyToken