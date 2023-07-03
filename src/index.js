const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const quotes = require("./quotes.json")
const app = express();

app.get("/", (req, res)=>{
    res.send("Hello");
});

app.get("/quote",(req, res)=>{
    res.status(200).json(quotes);
});

app.get("/random", (req, res)=>{
    let index = Math.floor(Math.random() * quotes.length);
    let quote = quotes[index];
    res.status(200).json(quote); 
});

app.listen(8000, ()=>{
    console.log("Server started onpost no. 5000");
});