const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const flavoursArr = await db.getFlavours()
  const toppingsArr = await db.getToppings()
  res.render('order', {
    topping: toppingsArr,
    flavour: flavoursArr,
    customer: id,
  })
})

//post for order

router.post('/:id', async (req, res) => {
  const ingredients = {
    flavour: req.body.flavour_id,
    topping: req.body.topping_id,
  }

  const levels = {
    ice: req.body.ice,
    sugar: req.body.sugar,
  }

  const customer_id = req.params.id

  const topping_id = await db.getToppingId(ingredients.topping)
  const flavour_id = await db.getFlavourId(ingredients.flavour)

  //change order for topping and flavour
  const order = { flavour_id, topping_id, customer_id }

  await db.createOrder(order, levels.ice, levels.sugar)
  res.redirect(`/profile/${customer_id}`)
})
