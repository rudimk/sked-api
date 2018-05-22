
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function (t) {
    t.increments('id').primary()
    t.integer('schedule_id').notNullable()
    t.integer('action_type').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
