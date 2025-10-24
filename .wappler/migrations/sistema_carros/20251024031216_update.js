
exports.up = function(knex) {
  return knex.schema
    .table('cd_carros', async function (table) {
      table.dropColumn('venda_visual');
      table.dropColumn('custo_visual');
      table.dropColumn('shaken_visual');
      table.dropColumn('cmimg');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('cd_carros', async function (table) {
      table.string('venda_visual', 20).notNullable();
      table.string('custo_visual', 20).notNullable();
      table.string('shaken_visual', 10).notNullable();
      table.string('cmimg', 300).notNullable();
    })
};
