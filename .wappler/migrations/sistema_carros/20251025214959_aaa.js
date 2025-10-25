
exports.up = function(knex) {
  return knex.schema
    .table('cd_carros', async function (table) {
      table.text('imgPrincipal', 4294967295).alter();
      table.text('imgGaleria', 4294967295).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('cd_carros', async function (table) {
      table.json('imgPrincipal', 4294967295).alter();
      table.json('imgGaleria', 4294967295).alter();
    })
};
