const WaxDeal = require( __base + 'models/waxDeal')

function updateWaxDeal (req,res) {
	const { id } = req.params
	const { Albumtitle, ArtistAlbum, VinylCode, Genre, Country, image } = req.body
	console.log(req.body)

	const dataToUpdate = {}
	if (Albumtitle) dataToUpdate.Albumtitle = Albumtitle
	if (ArtistAlbum) dataToUpdate.ArtistAlbum = ArtistAlbum
	if (VinylCode) dataToUpdate.VinylCode = VinylCode
	if (Genre) dataToUpdate.Genre = Genre
	if (Country) dataToUpdate.Country = Country
	if (image) dataToUpdate.Country = image


	WaxDeal.findByIdAndUpdate( id,  dataToUpdate)
		.then( () => res.status(200).json({ msg: `WaxDeal w/ id ${id} updated properly`}) )
		.catch( () => res.status(500).json({ msg: `error updating  WaxDeal w/ id ${id} `}) )

}

module.exports = updateWaxDeal

