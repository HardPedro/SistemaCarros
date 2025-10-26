
exports.up = function(knex) {
  return knex.schema
    .table('cd_carros', async function (table) {
      table.string('placa_regiao');
      table.integer('placa_classe');
      table.string('placa_hiragana');
      table.integer('placa_numero');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('cd_carros', async function (table) {
      table.dropColumn('placa_regiao');
      table.dropColumn('placa_classe');
      table.dropColumn('placa_hiragana');
      table.dropColumn('placa_numero');
    })
};
