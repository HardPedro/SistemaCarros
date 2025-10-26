
exports.up = function(knex) {
  return knex.schema
    .table('historico_placas', async function (table) {
      table.string('tipo');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('historico_placas', async function (table) {
      table.dropColumn('tipo');
    })
};
