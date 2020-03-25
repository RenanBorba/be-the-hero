// Commit
exports.up = function(knex) {
  // Criar tabela
  return knex.schema.createTable('incidents', function (table) {
    // Criar campos
    // auto incremento
    table.increments();
    // campo nunca nulo
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable();
    // foreign key
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

// Rollback
exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};