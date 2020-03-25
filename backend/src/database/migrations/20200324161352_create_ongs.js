// Commit
exports.up = function(knex) {
  // Criar tabela
  return knex.schema.createTable('ongs', function (table) {
    // Criar campos
    // primary key
    table.string('id').primary();
    // campo nunca nulo
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

// Rollback
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};