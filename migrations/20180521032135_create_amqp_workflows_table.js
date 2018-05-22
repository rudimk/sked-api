
exports.up = function(knex, Promise) {
  return knex.schema.createTable('amqp_workflows', function (t) {
    t.increments('id').primary()
    t.integer('action_id').notNullable()
    t.string('host').notNullable()
    t.integer('port').notNullable()
    t.string('username').notNullable()
    t.string('password').notNullable()
    t.string('exchange').notNullable()
    t.string('queue').notNullable()
    t.string('routing_key').notNullable()
    t.text('payload', 'longtext').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('amqp_workflows')
};