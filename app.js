const express = require("express");
const app = express();
const methodOverride = require('method-override');


const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todo");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(methodOverride('method'))

app.use(require("./routers/route"));
app.use(require("./routers/todo"));

app.listen(3000, console.log("port 3000"));
