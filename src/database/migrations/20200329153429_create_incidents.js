exports.up = knex =>
    knex.schema.createTable('incidents', table => {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.float('value').notNullable();
        table.string('grantee_id').notNullable();
        table
            .foreign('grantee_id')
            .references('id')
            .inTable('grantees');
        table.timestamps(true, true);
    });

exports.down = knex => knex.schema.dropTable('incidents');
