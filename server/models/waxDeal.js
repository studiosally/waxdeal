const mongoose = require('mongoose');
const collection = 'WaxDeals'

const WaxDealSchema = new mongoose.Schema({
    Albumtitle: {
        type: String
    },
    ArtistAlbum: {
        type: String
    },
    VinylCode: {
        type: String
    },
    Genre: {
        type: String
    },
    Country: {
        type: String
    },
    image: String

}, { collection })

module.exports = mongoose.model('WaxDeal', WaxDealSchema);


