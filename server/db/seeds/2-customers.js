exports.seed = function (knex) {
  return knex('customers').insert([
    {
      id: 99901,
      first_name: 'Paul',
      last_name: 'Dano',
    },
  ])
}
