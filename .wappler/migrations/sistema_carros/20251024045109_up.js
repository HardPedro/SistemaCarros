
exports.up = function(knex) {
  return knex.schema
    .table('cd_carros', async function (table) {
      table.text('AnoJap').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('cd_carros', async function (table) {
      table.integer('AnoJap').alter();
    })
};
