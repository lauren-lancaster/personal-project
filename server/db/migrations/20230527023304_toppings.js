exports.up = (knex) => {
  return knex.schema.createTable('toppings', (table) => {
    table.increments('id').primary()
    table.string('topping')
    table.string('drink_name_two')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('toppings')
}
