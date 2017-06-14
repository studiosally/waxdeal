function configRoutes($routeProvider) {
  $routeProvider
  		 .when('/addwaxdeal', {
            templateUrl: '/templates/addWaxDeal.html',
            controller: 'addwaxdealcontroller'
        })
}

module.exports = configRoutes