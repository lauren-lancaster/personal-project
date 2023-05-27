exports.seed = function (knex) {
  return knex('customers').insert([
    {
      id: 99901,
      first_name: 'Paul',
      last_name: 'Dano',
    },
    {
      id: 99902,
      first_name: 'Selena',
      last_name: 'Gomez',
    },
    {
      id: 99903,
      first_name: 'Chris',
      last_name: 'Hipkins',
    },
    {
      id: 99904,
      first_name: 'Kim',
      last_name: 'Possible',
    },
  ])
}
