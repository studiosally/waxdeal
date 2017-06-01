angular.module('mainApp')
  .controller('homecontroller', function ($scope, $rootScope, $location) {
    $rootScope.section = 'home'
    // $scope.search = function(e) {
    //   e.preventDefault()
    //   // $location.path('/search/' + $scope.query)
    // }
  })
