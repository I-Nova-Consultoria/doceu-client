const db = require('../db') 
const { json } = require('body-parser')

module.exports = {
    ping: (req, res) => {
        res.send("pong")
    }
}