exports.seed = function (knex) {
  return knex('orders').insert([
    {
      id: 1,
      ice: '30%',
      sugar: '30%',
      flavour_id: 'peach',
      topping_id: 'lychee',
      customer_id: 'paul',
    },
  ])
}
