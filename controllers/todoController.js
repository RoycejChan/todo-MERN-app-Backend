//IMPORT TO DO SCHEMA
const toDo = require('../models/toDoScheme');


// @desc Display To Dos, The home page
// @route GET /ToDoList
const getToDos = async(req, res) => {

    console.log("At the homee page");

    const todo = await toDo.find();
    console.log("Fetched todossss", todo);
    res.json(todo);
}


// @desc Add new ToDo Item
// @route Post /ToDolist/new
const newToDo = (req, res) => {
    const newToDoItem = new toDo({
        text: req.body.text,
        priority: req.body.priority 
    });

    newToDoItem.save()
        .then((task) => {
            console.log("Made a new TODOITEM", task);
            res.json(task);
        })
        .catch((error) => {
            console.error("Error:", error);
            res.status(500).json({ error: "Failed to create the task" });
        });
}

// @desc ADELETE ToDo Item
// @route DELETE /ToDolist/delete/:id
const deleteToDo = async (req, res) => {

    const result = await toDo.findByIdAndDelete(req.params.id);
    if (result == null) {
        consoles.log("This task does not exist");
        res.status(404).json({ error: "Task not found" }); // Respond with a 404 status and an error message
    } else {
    console.log('deleted task' + result + " ");
    res.json({result});
    }
}

// @desc MODIFY ToDo Item
// @route PUT /ToDolist/edit/:id
const editToDo = async (req, res) => {
    try {
        const result = await toDo.findById(req.params.id);
        if (!result) {
            return res.status(404).json({ error: "Task not found" });
        }

        result.text = req.body.text;
        result.priority = req.body.priority; 

        result.save()
            .then((task) => {
                console.log(`Edited ToDo: ${task}`);
                res.json(task);
            })
            .catch((error) => {
                console.error("Error:", error);
                res.status(500).json({ error: "Failed to edit the task" });
            });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to edit the task" });
    }
}

//EXPORT FUNCTIONS 
module.exports = {
    getToDos,
    newToDo,
    deleteToDo,
    editToDo
}