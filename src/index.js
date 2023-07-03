const express = require("express");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const app = express();

const mongoose = require("mongoose");
const req = require("express/lib/request");
const res = require("express/lib/response");

app.use(express.json());

app.use((req, res, next)=>{
    console.log("HTTP Method - " + req.method + ", URL - " + req.url);
    next();
});

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res)=>{
    res.send("Hello");
});

mongoose.connect("mongodb+srv://admin:admin@cluster0.5y4negj.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(8000, ()=>{
        console.log("Server started onpost no. 8000");
    });
})
.catch((error)=>{
    console.log(error);
})

