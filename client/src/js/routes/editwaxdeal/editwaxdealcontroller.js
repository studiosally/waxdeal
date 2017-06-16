function editwaxdealcontroller($scope, $location,  $routeParams, $rootScope, ApiService, toastr){
    $rootScope.section  = "editwaxdeal"

    const id = $routeParams.id
    console.log(id)

 	 ApiService.getSingleWaxDealbyid(id)
    	.then(waxdeal => {
      const {Albumtitle, ArtistAlbum, VinylCode, Genre, Country, image } = waxdeal
      $scope.Albumtitle = Albumtitle
      $scope.ArtistAlbum = ArtistAlbum
      $scope.VinylCode = VinylCode
      $scope.Genre = Genre
      $scope.Country = Country
      $scope.image = image
      
      console.log( waxdeal )

    })

  $scope.updateWaxDeal = function () {
    console.log ('click buton')
    const { Albumtitle, ArtistAlbum, VinylCode, Genre, Country, image } = $scope
    const data =  { Albumtitle, ArtistAlbum, VinylCode, Genre, Country, image }
    console.log(data)
    
    ApiService.updateWaxDeal(id, data)
   .then(msg => {
                console.log('data updated!!')
                toastr.success('Wax deal is updated!', msg);
                $location.path('/admin');
            })
  }
}

 module.exports =  editwaxdealcontroller