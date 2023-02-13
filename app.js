require('dotenv').config()
const express = require('express')
const te = require('tradingeconomics')

const app = express()
app.listen(8080)

te.login(process.env.TE_CLIENT_KEY)