const express  = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const noteRouter = express.Router();

noteRouter.get("/", (req, res)=>{
    res.send("Get note requesr");
});

noteRouter.post("/", (req, res)=>{
    res.send("Get post request");
});

module.exports = noteRouter;