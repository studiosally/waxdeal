angular.module('mainApp')
    .config(function($routeProvider) {
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
            .when('/search',{
                templateUrl: '/templates/search.html',
                controller: 'searchcontroller'
            })
             .when('/panel',{
            templateUrl: '/templates/panel.html',
            controller: 'panelcontroller'
            })

    })
