const express = require('express')
const router = express.Router()

const removeWaxDeal = require('./handlers/removeWaxDeal')
const updateWaxDeal = require('./handlers/updateWaxDeal')


router.delete('/:id', removeWaxDeal)
router.put('/:id', updateWaxDeal)


module.exports = router
