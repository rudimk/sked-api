
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action_types', function (t) {
    t.increments('id').primary()
    t.string('name').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('action_types')
};
