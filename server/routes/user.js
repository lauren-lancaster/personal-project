const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

router.get('/', async (req, res) => {
  console.log('home')
  const customer_name = await db.getCustomers()
  res.render('home', { customer: customer_name })
})
