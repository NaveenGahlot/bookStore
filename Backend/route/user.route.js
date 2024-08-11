const express = require("express");
const signup = require("../controller/user.controller.js");
const login = require("../controller/user.controller.js"); 
const route = express.Router();

route.post("/signup", signup) 
route.post("/login", login)

module.exports = route;