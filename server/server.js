require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const projectRoute = require('./routes/projectRoute')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio'

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB connection error:', err.message))

app.use('/api/projects', projectRoute)

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      error: 'Invalid JSON body. Send raw JSON with Content-Type: application/json.',
    })
  }

  return next(err)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
