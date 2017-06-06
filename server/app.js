const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const Discogs = require('disconnect').Client;

const app = express()

const routeswaxDeals = require('./routes/waxDeals')
const routeswaxDeal = require('./routes/waxDeal')

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* static folder */
app.use( express.static(path.join(__dirname,'../client')))

app.use('/api/waxDeals', routeswaxDeals)
app.use('/api/waxDeal', routeswaxDeal)

module.exports = app


