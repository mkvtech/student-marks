const marksController = require('./marksController')

const defineRoutes = (app) => {
    app.get('/', marksController.index)
    app.get('/table', marksController.index)
    app.get('/marks', marksController.indexJson)
    app.get('/form', marksController.newMark)
    app.post('/marks', marksController.createMark)
    app.delete('/marks/:id', marksController.deleteMark)
}

module.exports = defineRoutes
