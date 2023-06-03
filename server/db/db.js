const config = require('./knexfile').development
const db = require('knex')(config)

module.exports = {
  getCustomers,
  getFlavours,
  getToppings,
  getCustomerId,
  getOneCustomer,
  createOrder,
  getToppingId,
  getFlavourId,
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

function getOneCustomer(id) {
  return db('customers').first().select().where('id', id)
}

function getToppingId(topping) {
  return db('toppings').first().select('id').where('id', topping)
}

function getFlavourId(flavour) {
  return db('flavours').first().select('id').where('id', flavour)
}

function createOrder(order, ice, sugar) {
  return db('orders').insert({
    ice: ice,
    sugar: sugar,
    flavour_id: order.flavour_id.id,
    topping_id: order.topping_id.id,
    customer_id: order.customer_id,
  })

  //join
  //insert
}

//order page needs to have url order
//with params as user name

//order will join tables for customers etc
//customer will be taken from the url where it matches the db

//but for now

//post form
//takes user
//and drop down menu for the rest

//order form will update order table where params is same as customer
//if main page adds new customer to form first with null order valuesd
