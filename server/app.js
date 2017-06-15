const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const authRoutes = require('./routes/auth')
const routesWaxDeals = require('./routes/waxDeals')
const routesWaxDeal = require('./routes/waxDeal')

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* static folder */
app.use( express.static(path.join(__dirname,'../client/public/')))


app.use( authRoutes )
app.use('/api/waxdeals', routesWaxDeals)
app.use('/api/waxdeal', routesWaxDeal)

module.exports = app



