const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', async (req, res) => {
  const ordersArr = await db.getOrders()
  res.render('index', { order: ordersArr })
})

module.exports = router
