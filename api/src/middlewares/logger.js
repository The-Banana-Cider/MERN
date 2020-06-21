const {API_KEY} = require("../config")
exports.logger = (req, res, next)=>{
    console.log("-------",req.headers)
    req.appId = API_KEY
    next();//moving forward
}
