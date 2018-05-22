
exports.up = function(knex, Promise) {
  return knex.schema.createTable('schedules', function (t) {
    t.increments('id').primary()
    t.string('name').notNullable()
    t.string('minutes').notNullable()
    t.string('hours').notNullable()
    t.string('days').notNullable()
    t.string('weekdays').notNullable()
    t.string('months').notNullable()
    t.string('timezone').notNullable()
    t.integer('status').notNullable()
    t.string('last_run').notNullable()
    t.integer('last_status').notNullable()
    t.integer('active').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('schedules')
};