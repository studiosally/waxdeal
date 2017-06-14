function configRoutes($routeProvider) {
  $routeProvider
  		 .when('/addwaxdeal', {
            templateUrl: '/templates/addwaxdeal.html',
            controller: 'addwaxdealcontroller'
        })
}

module.exports = configRoutes