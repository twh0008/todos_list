var db = require(`../models`);

exports.getTodos = (req, res) => {
  db.Todo.find()
    .then(todos => {
      res.status(201).json(todos);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
};
exports.createTodo = (req, res) => {
  db.Todo.create(req.body)
    .then(newTodo => {
      res.json(newTodo);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
};
exports.findTodo = (req, res) => {
  db.Todo.findById(req.params.todoID)
    .then(todo => {
      res.json(todo);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
};
exports.updateTodo = (req, res) => {
  db.Todo.findByIdAndUpdate({ _id: req.params.todoID }, req.body, { new: true })
    .then(todo => {
      res.json(todo);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
};
exports.deleteTodo = (req, res) => {
  db.Todo.findByIdAndRemove({ _id: req.params.todoID }).catch(err => {
    console.log(err);
    res.send(err);
  });
};

module.exports = exports;