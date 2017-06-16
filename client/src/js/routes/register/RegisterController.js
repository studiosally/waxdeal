function RegisterController($scope, $location, AuthService, toastr) {

		$scope.register = function(event) {
			event.preventDefault()
			const { username, password } = $scope

			AuthService.register(username, password)
				.then(msg => {
                console.log(msg);
                $location.path('/admin');
                toastr.success('Welcome to Wax deal, you are registered now');

		})

}

}

module.exports = RegisterController
