
exports.up = function(knex, Promise) {
  return knex.schema.createTable('schedules', function (t) {
    t.increments('id').primary()
    t.string('name').notNullable()
    t.string('minutes').nullable()
    t.string('hours').nullable()
    t.string('days').nullable()
    t.string('weekdays').nullable()
    t.string('months').nullable()
    t.string('timezone').notNullable()
    t.integer('status').nullable()
    t.string('last_run').nullable()
    t.integer('last_status').nullable()
    t.integer('active').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('schedules')
};