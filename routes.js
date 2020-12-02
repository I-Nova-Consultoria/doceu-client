const express = require('express')
const router = express.Router()
const ServerController = require('./controllers/ServerController')

router.get('/ping', ServerController.ping)

module.exports = router