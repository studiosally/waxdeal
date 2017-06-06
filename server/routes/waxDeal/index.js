const express = require('express')
const router = express.Router()

const updateWaxDeal = require('./handlers/updateWaxDeal')
const removeWaxDeal = require('./handlers/removeWaxDeal')

router.put('/:id', updateWaxDeal)
router.delete('/:id', removeWaxDeal)

module.exports = router
