const { Router } = require("express");
const router = Router();

const Todo = require("../models/Todo");

router.post("/add/todo", (req, res) => {
  const { todo } = req.body;
  const newTodo = new Todo({ todo });

  newTodo
    .save()
    .then(() => {
      console.log("successefully added todo!");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
