function configRoutes($routeProvider) {
  $routeProvider
  		 .when('/addWaxDeal', {
            templateUrl: '/templates/addWaxDeal.html',
            controller: 'addwaxdealcontroller'
        })
}

module.exports = configRoutes