exports.seed = async function (knex) {
  await knex('toppings').del()
  await knex('toppings').insert([
    {
      id: 77701,
      topping: 'pearls',
      drink_name_two: 'juice',
    },
  ])
}
