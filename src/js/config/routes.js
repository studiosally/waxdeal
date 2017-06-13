function configRoutes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/templates/home.html',
            controller: 'homecontroller'
        })
         .when('/addwaxdeal', {
            templateUrl: '/templates/addWaxDeal.html',
        })

            .when('/addwaxdeal', {
            templateUrl: '/templates/addWaxDeal.html',
            controller: 'addwaxdealcontroller'
        })

        .when('/about', {
            templateUrl: '/templates/about.html',
        })
        .when('/contact', {
            templateUrl: '/templates/contact.html',  
            controller: 'contactcontroller'
        })
        .when('/profile', {
            templateUrl: '/templates/profile.html',
            controller: 'profilecontroller'
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
       
        .when('/panelprofile', {
            templateUrl: '/templates/panelprofile.html',
            controller: 'panelprofilecontroller'
        })
}

module.exports = configRoutes
