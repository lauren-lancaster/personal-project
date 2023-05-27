exports.seed = async function (knex) {
  await knex('customers').del()
  await knex('customers').insert([
    {
      id: 99901,
      first_name: 'Paul',
      last_name: 'Dano',
    },
  ])
}
