const mongoose = require("mongoose")
const {Schema} = mongoose
const UserSchema = new Schema({
    username: {type: String, required: "Username is required"},
    password: {type: String, required: "Password is required"},
}, {
    timestamp: true
})
