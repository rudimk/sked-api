
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('action_types').insert([
        {id: 1, name: 'HTTP'},
        {id: 2, name: 'AMQP'}
      ]);
    });
};
