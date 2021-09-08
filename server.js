const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 8000

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

// CSS, JS
app.use(express.static(__dirname + '/public'))

// Endpoints
const router = require('./server/router')
router(app)


// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/dist/table.html')
// })

// app.post('/marks', (req, res) => {
//     db.run(`
//         INSERT INTO ivertinimai (studentas, kursas, pazymys, data) VALUES
//         ('${req.body.name}', '${req.body.course}', ${req.body.mark}, '${(new Date()).toISOString()}');
//     `)

//     res.redirect('/table')
// })

// app.delete('/marks/:id', async (req, res) => {
//     db.run('DELETE FROM ivertinimai WHERE id = ?', req.params.id, (err) => {
//         if (err) {
//             console.error(err)
//             res.status(500)
//         }

//         res.status(200)
//     })
// })

// app.get('/form', (req, res) => {
//     res.sendFile(__dirname + '/dist/form.html')
// })

// app.get('/table', (req, res) => {
//     res.sendFile(__dirname + '/dist/table.html')
// })

// app.get('/marks', (req, res) => {
//     db.all('SELECT * FROM ivertinimai;', [], (err, rows) => {
//         if (err) {
//             console.error(err)
//             res.status(500)
//         }

//         res.json({ data: rows })
//     })
// })
