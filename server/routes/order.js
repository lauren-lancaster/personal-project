const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const flavoursArr = await db.getFlavours()
  const toppingsArr = await db.getToppings()
  res.render('order', { topping: toppingsArr, flavour: flavoursArr })
})

// router.post('/order', async (req, res) => {
//   const ordersArr = await db.getOrders()
//   res.render('order', { order: ordersArr })
// })
