exports.seed = function (knex) {
  return knex('toppings').insert([
    {
      id: 1,
      topping: 'pearls',
      drink_name_two: 'juice',
    },
    {
      id: 2,
      topping: 'popping pearls',
      drink_name_two: 'juice',
    },
    {
      id: 3,
      topping: 'jelly',
      drink_name_two: 'juice',
    },
  ])
}
