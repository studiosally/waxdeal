function panelprofilecontroller($scope){
	$scope.title = 'panelprofile'

	$scope.removeWaxDeal = function (id) {
    ApiService.removeWaxDeal(id)
        .then( $window.location.reload() )
}

 	$scope.updateWaxDeal = function (id) {
    apiTasksService.updateTask(id)
       $location.path('/panelprofile', $scope.waxDeal)
      }

}

module.exports = panelprofilecontroller