exports.seed = function (knex) {
  return knex('orders').insert([
    {
      id: 99901,
      ice: 'Ambitious Aardvark',
      sugar: 'aardvark@example.org',
      flavour_id: 'peach',
      topping_id: 'lychee',
      customer_id: 'paul',
    },
  ])
}
