
exports.up = function(knex) {
  return knex.schema
    .table('historico_placas', async function (table) {
      table.integer('id_carro').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('historico_placas', async function (table) {
      table.string('id_carro', 255).alter();
    })
};
