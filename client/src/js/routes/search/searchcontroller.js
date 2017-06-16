function searchcontroller($scope, $rootScope, $location, ApiService, AuthService){
	$scope.title = 'search'
	console.log("aqui")
	ApiService.getAllWaxDeal()
	.then(waxdeals => $scope.waxdeals = waxdeals)

}
module.exports = searchcontroller