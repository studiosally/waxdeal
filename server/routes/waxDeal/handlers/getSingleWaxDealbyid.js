const waxDeal = require( __base + 'models/waxDeal')

function getSingleWaxDealbyid (req, res) {
	const id = req.params.id
  
  waxDeal.findById(id)
    .then (waxdeal => res.json(waxdeal) )
    .then ( waxdeal => console.log("a saco"))
}

module.exports = getSingleWaxDealbyid

