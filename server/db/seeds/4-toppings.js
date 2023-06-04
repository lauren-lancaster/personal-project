exports.seed = function (knex) {
  return knex('toppings').insert([
    {
      id: 1,
      topping: 'pearls',
      drink_name_two: 'ocean treasure',
    },
    {
      id: 2,
      topping: 'popping pearls',
      drink_name_two: 'popping delight',
    },
    {
      id: 3,
      topping: 'jelly',
      drink_name_two: 'jelly sunset',
    },
    {
      id: 4,
      topping: 'cookie crumbs',
      drink_name_two: 'cookie crunch',
    },
    {
      id: 5,
      topping: 'cheese',
      drink_name_two: 'mouse trap',
    },
  ])
}
