const { join } = require('node:path')

const express = require('express')
const hbs = require('express-handlebars')

const userRoutes = require('./routes/user')
const orderRoutes = require('./routes/order')

const server = express()

// Middleware
const publicFolder = join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')

// Routes
server.use('/', userRoutes)
server.use('/order', orderRoutes)

module.exports = server
