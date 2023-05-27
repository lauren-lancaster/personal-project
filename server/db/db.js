//functioning

const config = require('./knexfile').development
const db = require('knex')(config)

module.exports = {
  getOrders,
}

function getOrders() {
  return db('orders').select()
}

// function getUser(id, db = connection) {
//   return db('users').where('id', id).first()
// }
