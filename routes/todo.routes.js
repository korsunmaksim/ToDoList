const { Router } = require("express");
const config = require("config");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const Todo = require("../models/Todo");
const { models } = require("mongoose");
const router = Router();

router.post("/add-todo", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(201).json({ message: "todo was created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "try again" });
  }
});

router.get("/my-todos", async (req, res) => {
  try {
    const todos = Todo.find({ owner: req.headers.authorization });
    res.status(201).json({ message: todos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "try again" });
  }
});

module.exports = router;
