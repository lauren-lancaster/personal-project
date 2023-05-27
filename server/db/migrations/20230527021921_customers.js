exports.up = (knex) => {
  return knex.schema.createTable('customers', (table) => {
    table.increments('id').primary()
    table.string('first_name')
    table.string('last_name')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('customers')
}
