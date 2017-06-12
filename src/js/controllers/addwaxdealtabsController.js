function addwaxdealtabsController($scope, $rootScope, ApiService) {
    $scope.title = 'addwaxdeal'

    $scope.tabs = [
    {
        name: 'Upload deal',
        url: 'tabs-data/owndata.html',
        active1: false
    }, {
        name: 'From Discogs',
        url: 'tabs-data/finditondiscogs.html',
        active1: true
    }, {
        name: 'More information',
        url: 'tabs-data/moreinformation.html',
        active1: false
    }
    ];

    $scope.tab = 'tabs-data/finditondiscogs.html'; /*default tab*/
    $scope.current = 'Discogs'; /*default active tab*/

    $scope.toggleTab = function() {
        $scope.tab = s.url; /*tab changed*/
        $scope.current = s.name; /* changing value of current*/
    }
}

module.exports = addwaxdealtabsController
