function homecontroller($scope, $rootScope, $location, ApiService, AuthService){
	$scope.title = 'home'
	console.log("aqui")
	// ApiService.getAllWaxDeal($scope.albumtitle)
	// .then(function(response){
 // 	  console.log("data arrived!")
 // 	  $rootScope.waxdeals = response 
 // 	  console.log($rootScope.waxdeals)
	// } )

	ApiService.getAllWaxDeal()
	.then(waxdeals => $scope.waxdeals = waxdeals)

}
module.exports = homecontroller


