exports.up = knex =>
    knex.schema.createTable('incidents', table => {
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.float('value').notNullable();
        table.string('grantee_id');
        table
            .foreign('grantee_id')
            .references('id')
            .inTable('grantess');
        table.timestamps(true, true);
    });

exports.down = knex => knex.schema.dropTable('incidents');
