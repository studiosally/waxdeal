const WaxDeal = require( __base + 'models/WaxDeal')

function getAll( req, res ) {

	WaxDeal.find()
		.then( waxdeals => res.json(waxdeals) )

}

module.exports = getAll