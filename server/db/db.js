const config = require('./knexfile').development
const db = require('knex')(config)

module.exports = {
  getCustomers,
  getFlavours,
  getToppings,
  getCustomerId,
}

function getCustomers() {
  return db('customers').select()
}

function getFlavours() {
  return db('flavours').select()
}

function getToppings() {
  return db('toppings').select()
}

// function getCustomerId(customer_info) {
//   return db('customers').select().where('id', customer_info.id)
// }

function getCustomerId(id) {
  return db('customers').first().select('id').where('id', id)
}

//order page needs to have url order
//with params as user name

//but for now

//post form
//takes user
//and drop down menu for the rest

//order form will update order table where params is same as customer
//if main page adds new customer to form first with null order valuesd
