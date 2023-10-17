const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
app = express();
app.use(express.json({ extended: true }))
app.use(cors());
const port = 9999;
const dbURL = 'mongodb://127.0.0.1:27017/';

mongoose.connect(dbURL, {
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}).then(console.log("Connected to DB"));

// END HEADER

//IMPORT TO DO SCHEMA
const toDo = require('./models/toDoScheme');

//IMPORT ROUTES
app.use('/ToDoList', require('./routes/toDoRoutes'));


app.listen(9999, () => {console.log(`Listening on port ${port}`)});

