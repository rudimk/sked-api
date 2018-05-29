
exports.up = function(knex, Promise) {
  return knex.schema.table('schedules', function (t) {
    t.string('runner_id').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('schedules', function (t) {
    t.dropColumn('runner_id')
  })
};
