const express = require('express')
const router = express.Router()

const addWaxDeal = require('./handlers/addWaxDeal')
const getall = require('./handlers/getall')

router.get('/', getall)
router.post('/', addWaxDeal)

module.exports = router
