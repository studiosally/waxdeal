function configRoutes($routeProvider) {
  $routeProvider
      .when('/logout', {
        template:'<h1> SEE YOU LATER ALIGATTOR.</h1>',
        controller: 'LogoutController'
      })

}
module.exports = configRoutes 