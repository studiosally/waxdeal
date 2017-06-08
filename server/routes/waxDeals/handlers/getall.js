const WaxDeal = require( __base + 'models/waxDeal')

function getAll( req, res ) {

	WaxDeal.find()
		.then( waxdeals => res.json(waxdeals) )
}

module.exports = getAll