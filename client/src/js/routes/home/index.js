function configRoutes($routeProvider) {
  $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'homecontroller'
      })
}
module.exports = configRoutes
