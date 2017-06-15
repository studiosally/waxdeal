const express= require('express')
const router= express.Router()
const passport= require(__base + 'config/passport')

const routerWaxDeal= require('./admin')
const routerWaxDeals = require('./admin')
const routerUser = require('./user')

router
	// .use(passport.authenticate('jwt', { session: false }))
  .use('/players', routerPlayers)
	.use('/squad', routerSquad)
	.use('/user', routerUser)

module.exports = router