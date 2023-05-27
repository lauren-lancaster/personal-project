exports.seed = (knex) => {
  return knex('orders')
    .del()
    .then(() => knex('orders').del())
    .then(() => knex('customers').del())
    .then(() => knex('flavours').del())
    .then(() => knex('toppings').del())
}
