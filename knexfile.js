module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './src/database/db.sqlite',
        },
        migrations: {
            tableName: 'migrations',
            directory: './src/database/migrations',
        },
        useNullAsDefault: true,
    },
    staging: {
        client: process.env.DATABASE_CLIENT,
        connection: {
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'migrations',
            directory: './src/database/migrations',
        },
    },
    production: {
        client: process.env.DATABASE_CLIENT,
        connection: {
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'migrations',
            directory: './src/database/migrations',
        },
    },
};
