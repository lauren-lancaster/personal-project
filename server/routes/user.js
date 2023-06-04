const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

router.get('/', async (req, res) => {
  console.log('home')
  const customer_name = await db.getCustomers()
  res.render('home', { customer: customer_name })
})

//router for profile page

router.post('/', async (req, res) => {
  const id = req.body.customer_id
  const result = await db.getCustomerId(id)
  res.redirect(`profile/${result.id}`)
})

router.get('/profile/:id', async (req, res) => {
  console.log('profile')
  const id = req.params.id
  const customer = await db.getOneCustomer(id)
  res.render('profile', customer)
})

//prev orders router

router.get('/profile/order/:id', async (req, res) => {
  console.log('prev orders')
  const id = req.params.id
  const orders = await db.getCustomerOrder(id)
  res.render(`prev-orders`, { orders })
})
