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

//post for order

router.post('/:id', async (req, res) => {
  console.log('hi')
  const { flavour, topping, ice, sugar } = req.body
  const customer_id = req.params.id
  const topping_id = await db.getToppingId(topping)
  const flavour_id = await db.getFlavourId(flavour)
  console.log(topping_id)
  console.log(flavour_id)
  //change order for topping and flavour
  const order = { flavour_id, topping_id, ice, sugar, customer_id }
  await db.createOrder(order)
  console.log({ order })
  res.redirect(`./profile/${customer_id}`)
})
