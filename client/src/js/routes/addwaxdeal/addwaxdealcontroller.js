function addwaxdealcontroller($scope, $location, $rootScope, ApiService, toastr) {
$rootScope.section = "addwaxdeal"

    $scope.addrecord = function() {
        console.log("click")

        const { Albumtitle, ArtistAlbum, VinylCode, Genre, Country, image } = $scope

        ApiService.addWaxDeal({ Albumtitle, ArtistAlbum, VinylCode, Genre, Country, image })
            .then(msg => {
                console.log(msg);
                $location.path('/panelprofile');
                toastr.success('Wax deal added!', 'Succes adding a new music deal');
            })
    }

}
module.exports = addwaxdealcontroller
