function configRoutes($routeProvider) {
  $routeProvider
    .when('/admin', {
    	templateUrl: '/templates/panelprofile.html',
        controller: 'admincontroller'
       })
}
module.exports = configRoutes
