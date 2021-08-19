/* eslint-disable consistent-return */
/* eslint-disable func-names */

exports.up = function (knex, Promise) {
  return knex.schema.hasTable('patients').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('patients', (t) => {
        t.increments('id').primary();
        t.string('name', 100).notNull();
        t.string('lastName', 100).notNull();
        t.bigint('identification', 20).notNull();
        t.bigint('priority', 20).notNull();
        t.timestamp('entry_time').notNull();
      });
    }
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.hasTable('patients').then((exists) => {
    if (exists) {
      return knex.schema.dropTable('patients');
    }
  });
};
