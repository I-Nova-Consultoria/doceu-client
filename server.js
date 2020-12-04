require('dotenv').config()
const express = require('express');
const cors = require('cors');
const fs = require('fs')
const bodyParser = require('body-parser')


const routes = require('./routes')




const app = express();

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api', routes)

const port = 5500;

app.listen(port, () => `Server running on port ${port}`);