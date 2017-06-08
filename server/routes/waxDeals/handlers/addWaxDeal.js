const WaxDeal = require( __base + 'models/waxDeal')

function addWaxDeal( req, res ) {
	const { Albumtitle, ArtistAlbum, VinylCode, Genre,Country, image } = req.body
	console.log({ Albumtitle, ArtistAlbum, VinylCode, Genre, Country, image } )
	const newWaxDeal= new WaxDeal( { Albumtitle, ArtistAlbum, VinylCode, Genre, Country, image} )
	newWaxDeal.save()
		.then( () => res.status(200).json({ msg: 'WaxDeal inserted properly'}) )
		.catch( () => res.status(500).json({ msg: 'error inserting WaxdDeal'}) )
}

module.exports = addWaxDeal


