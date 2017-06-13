function configRoutes($routeProvider) {
  $routeProvider
  		 .when('/about', {
            templateUrl: '/templates/about.html',
            controller: 'aboutcontroller'
        })
}

module.exports = configRoutes