exports.up = (knex) => {
  return knex.schema.createTable('orders', (table) => {
    table.increments('id').primary()
    table.string('ice')
    table.string('sugar')
    table.int('flavour_id')
    table.int('topping_id')
    table.int('customer_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('orders')
}
