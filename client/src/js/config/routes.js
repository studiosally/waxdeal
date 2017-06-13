function configRoutes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/templates/home.html',
            controller: 'homecontroller'
        })

        .when('/about', {
            templateUrl: '/templates/about.html',
            controller: 'aboutcontroller'
        })
        .when('/contact', {
            templateUrl: '/templates/contact.html',  
            controller: 'contactcontroller'
        })

        .when('/panelprofile', {
            templateUrl: '/templates/panelprofile.html',
            controller: 'panelprofilecontroller'
        })

        .when('/addwaxdeal', {
            templateUrl: '/templates/addwaxdeal.html',
            controller: 'addwaxdealcontroller'
        })
        
        .when('/disc', {
            templateUrl: '/templates/disc.html',
            controller: 'disccontroller'
        })
        .when('/login', {
            templateUrl: '/templates/login.html',
            controller: 'logincontroller'
        })
        .when('/search', {
            templateUrl: '/templates/search.html',
            controller: 'homecontroller'
        })
}

module.exports = configRoutes
