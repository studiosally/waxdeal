const WaxDeal = require( __base + 'models/waxDeal')

function removeWaxDeal (req,res) {
	const { id } = req.params
	WaxDeal.findByIdAndRemove( id )
		.then( () => res.status(200).json({ msg: `WaxDeal w/ id ${id} removed properly`}) )
		.catch( () => res.status(500).json({ msg: `error removing  WaxDeal w/ id ${id} `}) )
}

module.exports = removeWaxDeal
