const { Router } = require("express");
const router = Router();
const Todo = require("../models/Todo");

router.get("/home", (req, res) => {
  res.send("hello word");
});

router.get("/p/:id", (req, res) => {
  res.send(`Id is ${req.params.id}`);
});

router.get("/", async (req, res) => {
  const allTodo = await Todo.find();
  res.render("index", { todo: allTodo });
});

router.get("/delete/todo/:_id", (req, res) => {
  const { _id } = req.params;
  Todo.deleteOne({ _id })
    .then(() => {
      console.log("Deleted todo Successfully!");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

router.get("/edit/todo/:_id", (req, res) => {
  const { _id } = req.params;
  console.log(_id)
  Todo.
});

module.exports = router;
