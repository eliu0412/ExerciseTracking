// Setting up the server file
// importing express cors and mongoose with require

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express();
const port = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

// MAKE SURE TO CHANGE PASS WORD IN .ENV

// setting up our connection to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;

// listeners sends msg when successful event
connection.once('open', () => {
    console.log("MongoDB databse connection established succesfully")
})

// import and route to /exercises and /users when called for
const exercisesRouter = require('./routes/exercies')
const usersRouter = require('./routes/users')

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})