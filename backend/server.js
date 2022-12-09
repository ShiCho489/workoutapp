require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/User')



//express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/users', userRoutes)


//connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
})

.catch((error) => {
  console.log(error)
})

//listen for requests
app.listen(process.env.PORT, () => {
  console.log('connected to database & listening on port 4000')
})

