const express = require("express");
const router = express.Router();
const db = require(`../models`);


router.get(`/`, (req, res) => {
db.Todo.find()
    .then(todos => {
        res.status(201).json(todos);
    })
    .catch(err => {
        console.log(err);
        res.send(err);
    })

});

router.post(`/`, (req, res) => {
  db.Todo.create(req.body)
    .then(newTodo => {
        res.json(newTodo);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

router.get(`/:todoID`, (req, res) => {
  db.Todo.findById(req.params.todoID)
    .then(todo => {
      res.json(todo);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

router.put(`/:todoID`, (req, res) => {
  db.Todo.findByIdAndUpdate({ _id: req.params.todoID }, req.body, {new: true})
    .then(todo => {
      res.json(todo);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

router.delete(`/:todoID`, (req,res) => {
db.Todo.findByIdAndRemove({_id: req.params.todoID})
.catch(err => {
    console.log(err);
    res.send(err);
    });

});



module.exports = router;