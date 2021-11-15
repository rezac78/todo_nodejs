const express = require('express');
const app = express();

app.get("/",(req,res)=>{
        res.send("hello word")
})

app.get("/p/:id",(req,res)=>{
        res.send(`Id is ${req.params.id}`)
})

app.listen(8080,console.log("port 8080"))