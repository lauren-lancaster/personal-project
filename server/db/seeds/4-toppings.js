exports.seed = function (knex) {
  return knex('toppings').insert([
    {
      id: 1,
      topping: 'pearls',
      drink_name_two: 'juice',
    },
  ])
}
