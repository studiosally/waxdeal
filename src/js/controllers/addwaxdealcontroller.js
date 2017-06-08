function addwaxdealcontroller($scope, $rootScope, ApiService){
	$scope.title = 'addwaxdeal'


	$scope.addrecord = function(){
	console.log("click")

	const {Albumtitle, ArtistAlbum, VinylCode, Genre, Country, image} = $scope

	console.log(Albumtitle)
	console.log(ArtistAlbum)
	console.log(VinylCode)
	console.log(Genre)
	console.log(Country)
	console.log(image)

	ApiService.addWaxDeal({Albumtitle, ArtistAlbum, VinylCode, Genre, Country, image})
	.then(console.log)

	}
}
module.exports = addwaxdealcontroller

