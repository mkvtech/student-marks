const db = require('./connection')

const currentDate = (new Date()).toISOString()

db.run(`

INSERT INTO ivertinimai (id, studentas, kursas, pazymys, data) VALUES
(1, 'Pirmas Studentas', 'Duomenų bazės', 9, '${currentDate}'),
(2, 'Antras Studentas', 'Ekonomika', 6, '${currentDate}'),
(3, 'Trečias Studentas', 'Tikimybių teorija', 4, '${currentDate}');

`)

console.log('Seeded DB tables');
