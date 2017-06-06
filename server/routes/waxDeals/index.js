const express = require('express')
const router = express.Router()

const addWaxDeal = require('./handlers/addWaxDeal')
const getAll = require('./handlers/getAll')

router.get('/', getAll)
router.post('/', addWaxDeal)

module.exports = router
