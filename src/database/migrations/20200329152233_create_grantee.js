exports.up = knex =>
    knex.schema.createTable('grantees', table => {
        table.string('id').primary();
        table.string('name').notNullable();
        table
            .string('email')
            .notNullable()
            .unique();
        table
            .string('whatsapp')
            .notNullable()
            .unique();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table.timestamps(true, true);
    });

exports.down = knex => knex.schema.dropTable('grantees');
