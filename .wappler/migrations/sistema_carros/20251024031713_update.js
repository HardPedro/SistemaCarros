
exports.up = function(knex) {
  return knex.schema
    .table('cd_carros', async function (table) {
      table.string('opcionais');
      table.string('servicos');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('cd_carros', async function (table) {
      table.dropColumn('opcionais');
      table.dropColumn('servicos');
    })
};
