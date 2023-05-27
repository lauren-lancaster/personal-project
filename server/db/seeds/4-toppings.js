exports.seed = function (knex) {
  return knex('toppings').insert([
    {
      id: 77701,
      topping: 'pearls',
      drink_name_two: 'juice',
    },
  ])
}
