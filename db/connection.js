const path = require('path')
const sqlite3 = require('sqlite3').verbose()

const databaseName = path.join(__dirname, 'development.sqlite3')

const db = new sqlite3.Database(databaseName, err => {
    if (err) {
        throw err.message
    }

    console.log('Connected to SQLite3')
})

module.exports = db;
