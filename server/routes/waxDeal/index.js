const express = require('express')
const router = express.Router()

const removeWaxDeal = require('./handlers/removeWaxDeal')
const getSingleWaxDealbyid = require('./handlers/getSingleWaxDealbyid')
const updateWaxDeal = require('./handlers/updateWaxDeal')


router.delete('/:id', removeWaxDeal)
router.get('/:id', getSingleWaxDealbyid)
router.put('/:id', updateWaxDeal)



module.exports = router
