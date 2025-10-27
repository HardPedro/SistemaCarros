
exports.up = function(knex) {
  return knex.schema
    .table('historico_placas', async function (table) {
      table.string('id_carro');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('historico_placas', async function (table) {
      table.dropColumn('id_carro');
    })
};
