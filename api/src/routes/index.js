const controllers = require("../controllers")
module.exports = (app) => {
    app
        .get("/api/users", controllers.userList)
        .post("/api/users", controllers.userCreate)
        .get("/api/users/:id", controllers.userDetails)
        .put("/api/users/:id", controllers.userUpdate)
        .delete("/api/users/:id", controllers.userDelete)

    //User Login
    app.post("/api/login",controllers.login)
}