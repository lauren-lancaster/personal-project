exports.seed = function (knex) {
  return knex('flavours').insert([
    {
      id: 1,
      flavour: 'lychee',
      drink_name_one: 'fruit',
    },
  ])
}
