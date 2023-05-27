const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

router.get('/order', async (req, res) => {
  console.log('order')
  const flavoursArr = await db.getFlavours()
  res.render('order', { order: flavoursArr })
})

router.get('/order', async (req, res) => {
  const toppingsArr = await db.getToppings()
  res.render('order', { order: toppingsArr })
})

// router.post('/order', async (req, res) => {
//   const ordersArr = await db.getOrders()
//   res.render('order', { order: ordersArr })
// })
