const sqlite = {
    client: 'sqlite3',
    connection: {
        filename: './src/database/db.sqlite'
    },
    useNullAsDefault: true,
}

module.exports = {sqlite}