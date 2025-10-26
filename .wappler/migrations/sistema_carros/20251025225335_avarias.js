
exports.up = function(knex) {
  return knex.schema
    .table('cd_carros', async function (table) {
      table.text('avarias');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('cd_carros', async function (table) {
      table.dropColumn('avarias');
    })
};
