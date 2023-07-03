const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { signup, signin } = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.post("/signup", signup);

userRouter.post("/signin", signin);

module.exports = userRouter;

