
exports.up = function(knex, Promise) {
  return knex.schema.createTable('status_codes', function (t) {
    t.increments('id').primary()
    t.string('name').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('status_codes')
};