const express = require('express')
const app = express.Router()
const loginController = require('../controller/login')
const checkAuth = require('../middleware/authorize')

app.post('/login', loginController.login)
app.get('/', checkAuth.authorize, (req, res) => {

    data = req.userData;

    return res.json({
        data
    })

})

module.exports = app
