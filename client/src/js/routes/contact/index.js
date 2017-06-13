function configRoutes($routeProvider) {
  $routeProvider
     .when('/contact', {
            templateUrl: '/templates/contact.html',  
            controller: 'contactcontroller'
        })
}
module.exports = configRoutes
