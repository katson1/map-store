/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createTable('produtos', {
    id: 'id',
    nome: {
      type: 'varchar(255)',
      notNull: true
    },
    descricao: {
      type: 'text'
    },
    categoria_id: {
      type: 'integer',
      references: 'categories',
      onDelete: 'CASCADE'
    },
    latitude: {
      type: 'float'
    },
    longitude: {
      type: 'float'
    }
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.dropTable('produtos');
};
