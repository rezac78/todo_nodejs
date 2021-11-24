const Todo = require("../models/Todo");

exports.gethome = async (req, res) => {
  const allTodo = await Todo.find();
  res.render("index", { todo: allTodo });
};

exports.postAdd = (req, res) => {
  const { todo } = req.body;
  const newTodo = new Todo({ todo });

  newTodo
    .save()
    .then(() => {
      console.log("successefully added todo!");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.getDeleted = (req, res) => {
  const { _id } = req.params;
  Todo.deleteOne({ _id })
    .then(() => {
      console.log("Deleted todo Successfully!");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.getEdit = (req, res) => {
  const { _id } = req.params;
  Todo.findById(_id, (err, todo) => {
    if (err) console.log(err);
    res.render("edit", { todo: todo });
  });
};

exports.putEdit = (req, res) => {
  const { _id } = req.params;
  const { todo } = req.body;
  Todo.findByIdAndUpdate(_id, { todo: todo }, (err) => {
    if (err) console.log(err);
    res.redirect("/");
  });
};
