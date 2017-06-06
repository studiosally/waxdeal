const WaxDeal = require( __base + 'models/WaxDeal')

function addWaxDeal( req, res ) {
	const { Albumtitle, ArtistAlbum, VinylCode, Genre, image } = req.body
	console.log({ Albumtitle, ArtistAlbum, VinylCode, Genre, image } )
	const newWaxDeal= new WaxDeal( { Albumtitle, ArtistAlbum, VinylCode, Genre, image} )
	newWaxDeal.save()
		.then( () => res.status(200).json({ msg: 'WaxDeal inserted properly'}) )
		.catch( () => res.status(500).json({ msg: 'error inserting WaxdDeal'}) )
}

module.exports = addWaxDeal


