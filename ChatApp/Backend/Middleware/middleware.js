const jwt = require('jsonwebtoken')

const middlware = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).send({ error: 'please authenticate with valid token' })

    try {
        const data = jwt.verify(token, process.env.JWT_SECRET)
        req.user = data
        next();
    } catch (error) {
        res.status(401).send({ error: 'please authenticate with valid token' })
    }
}
module.exports = middlware