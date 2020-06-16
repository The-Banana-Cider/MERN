const {API_KEY} = require("../config")
exports.logger = (req, res, next)=>{
    // console.log("Hello Log")
    req.appId = API_KEY
    next();//moving forward
}