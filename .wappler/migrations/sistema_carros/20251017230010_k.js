
exports.up = function(knex) {
  return knex.schema
    .table('cd_prod', async function (table) {
      table.text('imagem', 4294967295).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('cd_prod', async function (table) {
      table.binary('imagem', 4294967295).alter();
    })
};
