const express = require("express");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const mongoose = require("mongoose");

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res)=>{
    res.send("WELCOME FROM CHEZZY CODE");
});

const PORT = process.env.PORT || 8000;

mongoose.connect("mongodb+srv://admin:admin@cluster0.5y4negj.mongodb.net/notes_db?retryWrites=true&w=majority")
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started onpost no. " + PORT);
    });
})
.catch((error)=>{
    console.log(error);
})
