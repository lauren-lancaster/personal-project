exports.seed = function (knex) {
  return knex('flavours').insert([
    {
      id: 1,
      flavour: 'lychee',
      drink_name_one: 'fruity',
    },
    {
      id: 2,
      flavour: 'peach',
      drink_name_one: 'pink',
    },
    {
      id: 3,
      flavour: 'yuzu',
      drink_name_one: 'tasty',
    },
    {
      id: 4,
      flavour: 'green',
      drink_name_one: 'green',
    },
    {
      id: 5,
      flavour: 'matcha',
      drink_name_one: 'earthy',
    },
    {
      id: 6,
      flavour: 'mango',
      drink_name_one: 'tropical',
    },
    {
      id: 7,
      flavour: 'taro',
      drink_name_one: 'sweet',
    },
    {
      id: 8,
      flavour: 'honeydew',
      drink_name_one: 'golden',
    },
  ])
}
