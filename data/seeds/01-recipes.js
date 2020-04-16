
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        {name: 'Tacos'},
        {name: 'Popcorn'},
        {name: 'Milkshake'}
      ]);
    });
};
