exports.seed = function (knex) {
  return knex('flavours').insert([
    {
      id: 77701,
      flavour: 'lychee',
      drink_name_one: 'fruit',
    },
  ])
}
