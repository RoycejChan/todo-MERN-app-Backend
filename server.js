const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(
	cors({
	  origin: ["http://localhost:5173", "https://mern-todotask-app.onrender.com"],
	})
  );
const port = 9999;
const dbURL = 'mongodb+srv://RoyceChan:BlacknWhite@cluster0.n0hpspp.mongodb.net/tasks';

mongoose.connect(dbURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true 
  }).then(() => {
	console.log("Connected to DB");
  });
// END HEADER

//IMPORT TO DO SCHEMA
const toDo = require('./models/toDoScheme');

//IMPORT ROUTES
app.use('/', require('./routes/toDoRoutes'));


app.listen(9999, () => {console.log(`Listening on port ${port}`)});

