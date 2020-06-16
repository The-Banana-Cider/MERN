const express = require("express")
const bodyParser = require("body-parser")
const {APP_PORT} = require("./config")
const {logger} = require("./middlewares/")
const app = express()
app.use(bodyParser.json());
app.use(logger);
/*
Required by EJS
 */
app.use(express.static(__dirname + '/assets'))
app.set('views', __dirname + '/views')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
/*
Required by EJS
 */
require("./routes")(app)
app.get(`/`, (req, res) => {
    // console.log("Appid =",req.appId)
    res.render('index')
})
app.get("/*/*", (req, res) => {
    res.status(404).send("Page Not Found")
})
app.listen(APP_PORT, () => {
    console.log(`App is Running on http://localhost:${APP_PORT}`)
})