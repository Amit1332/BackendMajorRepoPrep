const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const indexRoute = require('./routes')
const databaseConn = require('./config/db')

const app =express()
app.use(express.static('client'));
app.use(express.json());

dotenv.config()

  
app.use(cors({
    origin:'*'
}))



app.use('/api/v1', indexRoute)





module.exports = app