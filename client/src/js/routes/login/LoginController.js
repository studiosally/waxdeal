function LoginController($scope, $location, AuthService, toastr) {

	$scope.login = function(event) {
		event.preventDefault()
		const { username, password } = $scope

		AuthService.login(username, password)
			.then(msg => {
				console.log(msg)
				$location.path('/admin')
				toastr.success('You are login in Wax Deal');
			})
			.catch(console.log)
	}

}

module.exports = LoginController