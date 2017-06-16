function homecontroller($scope, $rootScope, $location, ApiService, AuthService){
	$scope.title = 'home'
	console.log("aqui")
	// ApiService.getAllWaxDeal($scope.albumtitle)
	// .then(function(response){
 // 	  console.log("data arrived!")
 // 	  $rootScope.waxdeals = response 
 // 	  console.log($rootScope.waxdeals)
	// } )

	$scope.login = function(event) {
		event.preventDefault()
		const { username, password } = $scope

		AuthService.login(username, password)
			.then(msg => {
				console.log(msg)
				$location.path('/admin')
			})
			.catch(console.log)
	}



	ApiService.getAllWaxDeal()
	.then(waxdeals => $scope.waxdeals = waxdeals)

}
module.exports = homecontroller


