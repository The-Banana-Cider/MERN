const express = require ("express")
const bodyParser = require("body-parser")
const {APP_PORT} = require("./config")
const {logger} = require("./middlewares/")
const app = express()
app.use(bodyParser.json());
app.use(logger);
require("./routes")(app)
app.get("/",(req, res)=>{
    // console.log("Appid =",req.appId)
    res.send("Welcome to the Backend with MERN")
})
app.get("/*/*",(req, res)=>{
    res.status(404).send("Page Not Found")
})
app.listen(APP_PORT,()=>{
    console.log(`App is Running on http://localhost:${APP_PORT}`)
})