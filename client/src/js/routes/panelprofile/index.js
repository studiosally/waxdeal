function configRoutes($routeProvider) {
  $routeProvider
    .when('/panelprofile', {
    	templateUrl: '/templates/panelprofile.html',
        controller: 'homecontroller'
       })
}
module.exports = configRoutes
