
exports.up = function(knex) {
  return knex.schema
    .table('cd_carros', async function (table) {
      table.text('imgPrincipal');
      table.json('imgGaleria');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('cd_carros', async function (table) {
      table.dropColumn('imgPrincipal');
      table.dropColumn('imgGaleria');
    })
};
