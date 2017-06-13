function addwaxdealtabsController($scope,ApiService) {
    $scope.title = 'addwaxdeal'
        console.log("aqui en addwadealcontroller")

    $scope.tabs = [
    {
        name: 'Upload deal',
        url: '/templates/tabsdata/owndata.html',
        active1: true
    }, {
        name: 'From Discogs',
        url: '/templates/tabsdata/finditondiscogs.html',
        active1: true   
    }, {
        name: 'More information',
        url: '/templates/tabsdata/moreinformation.html',
        active1: true
    }
    ];

    $scope.tab = '/templates/tabsdata/owndata.html'; /*default tab*/
    $scope.current = 'Upload your deal'; /*default active tab*/

    $scope.toggleTab = function(s) {
        $scope.tab = s.url; /*tab changed*/
        $scope.current = s.name; /* changing value of current*/
    }
}

module.exports = addwaxdealtabsController
