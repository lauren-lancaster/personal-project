const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

router.get('/', async (req, res) => {
  console.log('home')
  const ordersArr = await db.getOrders()
  res.render('home', { order: ordersArr })
})
