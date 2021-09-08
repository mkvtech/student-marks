const db = require('../db/connection')
const path = require('path')

module.exports = {
    index: (req, res) => {
        res.sendFile(path.resolve('./dist/table.html'))
    },

    indexJson: (req, res) => {
        db.all('SELECT * FROM ivertinimai;', [], (err, rows) => {
            if (err) {
                console.error(err)
                res.status(500)
            }

            res.json({ data: rows })
        })
    },

    newMark: (req, res) => {
        res.sendFile(path.resolve('./dist/form.html'))
    },

    createMark: (req, res) => {
        db.run(`
            INSERT INTO ivertinimai (studentas, kursas, pazymys, data) VALUES
            ('${req.body.name}', '${req.body.course}', ${req.body.mark}, '${(new Date()).toISOString()}');
        `)

        res.redirect('/table')
    },

    deleteMark: (req, res) => {
        db.run('DELETE FROM ivertinimai WHERE id = ?', req.params.id, (err) => {
            if (err) {
                console.error(err)
                res.status(500)
            }

            res.status(200)
        })
    }
}
