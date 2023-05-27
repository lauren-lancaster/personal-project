exports.seed = async function (knex) {
  await knex('flavours').del()
  await knex('flavours').insert([
    {
      id: 77701,
      flavour: 'lychee',
      drink_name_one: 'fruit',
    },
  ])
}
