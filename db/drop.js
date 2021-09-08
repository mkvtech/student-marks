const db = require('./connection')

db.run('DROP TABLE IF EXISTS ivertinimai;')

console.log('Dropped DB tables');
