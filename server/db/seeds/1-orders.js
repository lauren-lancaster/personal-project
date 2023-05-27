exports.seed = function (knex) {
  return knex('orders').insert([
    {
      id: 1,
      ice: '30%',
      sugar: '30%',
      flavour_id: 1,
      topping_id: 1,
      customer_id: 1,
    },
    {
      id: 2,
      ice: '60%',
      sugar: '90%',
      flavour_id: 2,
      topping_id: 2,
      customer_id: 2,
    },
  ])
}
