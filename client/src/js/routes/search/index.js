function configRoutes($routeProvider) {
  $routeProvider
    .when('/search', {
    	templateUrl: '/templates/search.html',
        controller: 'homecontroller'
       })
}
module.exports = configRoutes
