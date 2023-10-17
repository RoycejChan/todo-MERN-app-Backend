const express = require('express');
const router = express.Router();
const {getToDos, newToDo, deleteToDo, editToDo } = require("../controllers/todoController")



// @desc Display To Dos, The home page
// @route GET /ToDoList
router.get('/', getToDos);

// @desc Add new ToDo Item
// @route Post /ToDolist/new
router.post('/new', newToDo);

// @desc Delete new ToDo Item
// @route DELETE /ToDolist/delete/:id
router.delete('/delete/:id', deleteToDo);

// @desc EDIT new ToDo Item
// @route PUT /ToDolist/edit/:id
router.put('/edit/:id', editToDo);


module.exports = router;