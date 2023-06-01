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

router.get('/profile/:id', async (req, res) => {
  console.log('profile')
  const id = req.params.id
  const customer = await db.getOneCustomer(id)
  console.log(customer)
  res.render('profile', customer)
})

// router.post('/', async (req, res) => {
//   const { first_name, last_name } = req.body
//   const { customer_id } = Number(req.body.id)
//   const customer_info = { first_name, last_name, customer_id }
//   console.log(customer_info)
//   const result = await db.getCustomerId(customer_info)
//   console.log(result)
//   res.redirect(`order/${result}`)
// })

router.post('/', async (req, res) => {
  const id = req.body.customer_id
  const result = await db.getCustomerId(id)
  res.redirect(`profile/${result.id}`)
})
