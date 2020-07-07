const express = require('express')
const app = express.Router()
const usercontroller = require('../controller/user')

app.post('/', usercontroller.create)
app.get('/', usercontroller.fetch)
app.get('/:id', usercontroller.fetchById)
app.put('/:id', usercontroller.update)
app.delete('/:id', usercontroller.delete)

module.exports = app
