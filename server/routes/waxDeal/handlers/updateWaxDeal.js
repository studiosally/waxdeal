const WaxDeal = require( __base + 'models/WaxDeal')

function updateWaxDeal (req,res) {
	const { id } = req.params
	const { name, description, image } = req.body

	const dataToUpdate = {}
	if (name) dataToUpdate.name = name
	if (description) dataToUpdate.description = description
	if (image) dataToUpdate.image = image

	WaxDeal.findByIdAndUpdate( id,  dataToUpdate)
		.then( () => res.status(200).json({ msg: `WaxDeal w/ id ${id} updated properly`}) )
		.catch( () => res.status(500).json({ msg: `error updating  WaxDeal w/ id ${id} `}) )


}

module.exports = updateWaxDeal
