angular.module('mainApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'homecontroller'
      })
      .when('/user/:item', {
        templateUrl: '/templates/profile.html',
        controller: 'profileController'
      })
  })
