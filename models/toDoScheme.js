const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    timestamp: {
		type: String,
		default: Date.now()

	},
    priority: {
        type: String, 
    },
    completed: {
        type:Boolean
    }
})

const toDo = mongoose.model("toDo", todoSchema, "ToDoList")

module.exports = toDo;