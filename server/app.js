const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const Discogs = require('disconnect').Client;

const app = express()

const routesWaxDeals = require('./routes/waxdeals')
const routesWaxDeal = require('./routes/waxdeal')

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* static folder */
app.use( express.static(path.join(__dirname,'../client')))

app.use('/api/waxdeals', routesWaxDeals)
app.use('/api/waxdeal', routesWaxDeal)

module.exports = app


