const {verify} = require('jsonwebtoken')
const {JW_SECRET_ACCESS_TOKEN} = require('../config')
exports.auth = (req, res, next) => {
    const authorization = req.headers
    if (!authorization) {
        throw new Error("Unauthorized Access")
    }
    const accessToken = authorization.split(" ")[1]
    const payload = verify(accessToken, JW_SECRET_ACCESS_TOKEN)
    console.log("----", payload)

    next()
}