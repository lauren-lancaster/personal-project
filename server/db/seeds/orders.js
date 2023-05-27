exports.seed = async function (knex) {
  await knex('orders').del()
  await knex('orders').insert([
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
