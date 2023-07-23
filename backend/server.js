require('dotenv').config()

const express = require('express')
const app = express()
const mongooes = require('mongoose')
const workoutRouter = require('./routes/workout')


// middleware

app.use(express.json())

app.use((req,res,next) =>{
    console.log(req.path,req.method)
    next()
})

// Route
app.use('/api/workouts',workoutRouter)

// connect to db
mongooes.connect(process.env.MONGO_URI)
.then(()=> {
    // listen for port
    app.listen(process.env.PORT, ()=>{
    console.log("Listening for port ", process.env.PORT)
})
})

.catch((error) =>{
    console.log(error)
})

