exports.up = function(knex) {
  return knex.schema
    // recipes
    .createTable('Recipes', tbl => {
      tbl.increments('id');
      tbl.string('name').notNullable().unique().index();
    })

    // steps
    .createTable('Steps', tbl => {
      tbl.increments('id');
      tbl.string('instruction').notNullable();
      tbl.integer('step_number').notNullable();
      tbl.integer('recipe_id').notNullable().references('id').inTable('Recipes');
    })

    // ingredients
    .createTable('Ingredients', tbl => {
      tbl.increments('id');
      tbl.string('name').notNullable().index();
    })
    
    // ingredient details
    .createTable('IngredientDetails', tbl => {
      tbl.increments('id');
      tbl.integer('recipe_id').notNullable().references('id').inTable('Recipes');
      tbl.integer('ingredient_id').notNullable().references('id').inTable('Ingredients');
      tbl.float('quantity', 2).notNullable();
      tbl.string('unit').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Recipes')
    .dropTableIfExists('Steps')
    .dropTableIfExists('Ingredients')
    .dropTableIfExists('IngredientDetails');
};
