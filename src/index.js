if (process.env.NODE_ENV !== 'dev') {
  require('dotenv').config()
}

const express = require('express')
const morgan = require('morgan')
const path = require('path')

// Routes
const notificationRoute = require('./routes/notification')

const app = express()

// MIDDLEWARES
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// ROUTES
app.use('/notification', notificationRoute)

// STATIC
app.use(express.static(path.join(__dirname + '/public')))

// INITIALIZATION
app.listen(3000, () => console.log('Server on!'))
