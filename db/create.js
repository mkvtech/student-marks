const db = require('./connection')

db.run(`

CREATE TABLE IF NOT EXISTS ivertinimai (
    id         INTEGER       PRIMARY KEY AUTOINCREMENT,
    studentas  VARCHAR(100)  NOT NULL,
    kursas     VARCHAR(100)  NOT NULL,
    pazymys    INTEGER       NOT NULL,
    data       TEXT          NOT NULL
);

`)

console.log('Created DB tables');
