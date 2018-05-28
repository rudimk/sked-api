
exports.up = function(knex, Promise) {
  return knex.schema.table('schedules', function (t) {
    t.string('service_id').nullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('schedules', function (t) {
    t.dropColumn('service_id')
  })
};
