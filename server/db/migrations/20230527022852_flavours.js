exports.up = (knex) => {
  return knex.schema.createTable('flavours', (table) => {
    table.increments('id').primary()
    table.string('flavour')
    table.string('drink_name_one')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('flavours')
}
