const express = require('express')
const hbs = require('express-handlebars')

const testRoutes = require('./routes/test')
const orderRoutes = require('./routes/order')

const server = express()

// Middleware
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/', testRoutes)
server.use('/order', orderRoutes)

module.exports = server
