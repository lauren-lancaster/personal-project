exports.seed = function (knex) {
  return knex('flavours').insert([
    {
      id: 1,
      flavour: 'lychee',
      drink_name_one: 'fruit',
    },
    {
      id: 2,
      flavour: 'peach',
      drink_name_one: 'fruit',
    },
    {
      id: 3,
      flavour: 'yuzu',
      drink_name_one: 'fruit',
    },
  ])
}
