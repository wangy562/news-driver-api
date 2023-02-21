require('dotenv').config()
const express = require('express')
const te = require('tradingeconomics')

const app = express()

te.login(process.env.TE_CLIENT_KEY)

const baseUrl = '/api/v1'

app.get(`${baseUrl}`, (req, res) => {

})

const eventRouter = require('./routes/events')

app.use(`${baseUrl}/events`, eventRouter)

app.listen(8080, () => {
    console.log("Server listening on port 8080...")
})