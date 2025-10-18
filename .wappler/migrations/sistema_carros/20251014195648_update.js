
exports.up = function(knex) {
  return knex.schema
    .table('cd_prod', async function (table) {
      table.string('img');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('cd_prod', async function (table) {
      table.dropColumn('img');
    })
};
