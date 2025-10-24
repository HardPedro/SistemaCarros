
exports.up = function(knex) {
  return knex.schema
    .table('cd_carros', async function (table) {
      table.dropColumn('av1');
      table.dropColumn('av2');
      table.dropColumn('av3');
      table.dropColumn('av4');
      table.dropColumn('av5');
      table.dropColumn('av6');
      table.dropColumn('av7');
      table.dropColumn('av8');
      table.dropColumn('av9');
      table.dropColumn('av10');
      table.dropColumn('av11');
      table.dropColumn('av12');
      table.dropColumn('av13');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('cd_carros', async function (table) {
      table.string('av1', 8).notNullable();
      table.string('av2', 8).notNullable();
      table.string('av3', 8).notNullable();
      table.string('av4', 8).notNullable();
      table.string('av5', 8).notNullable();
      table.string('av6', 8).notNullable();
      table.string('av7', 8).notNullable();
      table.string('av8', 8).notNullable();
      table.string('av9', 8).notNullable();
      table.string('av10', 8).notNullable();
      table.string('av11', 8).notNullable();
      table.string('av12', 8).notNullable();
      table.string('av13', 8).notNullable();
    })
};
