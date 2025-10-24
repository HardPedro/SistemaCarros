
exports.up = function(knex) {
  return knex.schema
    .table('cd_clientes', async function (table) {
      table.dropColumn('foto');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('cd_clientes', async function (table) {
      table.binary('foto', 4294967295).notNullable();
    })
};
