
exports.up = function(knex) {
  return knex.schema
    .createTable('historico_placas', async function (table) {
      table.increments('id');
      table.string('regiao');
      table.integer('classe');
      table.string('hiragana');
      table.integer('numero');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('historico_placas')
};
