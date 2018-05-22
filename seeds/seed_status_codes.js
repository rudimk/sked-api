
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('status_codes').del()
    .then(function () {
      // Inserts seed entries
      return knex('status_codes').insert([
        {id: 1, name: 'UNPROCESSED'},
        {id: 2, name: 'LOCKED'},
        {id: 3, name: 'IN PROGRESS'},
        {id: 4, name: 'COMPLETED'}
      ]);
    });
};
