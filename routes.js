const express = require('express')
const router = express.Router()
const ServerController = require('./controllers/ServerController')

router.get('/ping', ServerController.ping)
router.get('/users', ServerController.users)

module.exports = router