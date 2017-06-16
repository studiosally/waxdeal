var fs = require('fs');
var htmlSearch = fs.readFileSync(__dirname + '/search.html', 'utf8');

function searchcontroller($scope){
 	$routeProvider
  		 .when('/search', {
            template: htmlSearch,
            controller: 'searchcontroller'
        })
	ApiService.getAllWaxDeal()
	.then(waxdeals => $scope.waxdeals = waxdeals)

}
module.exports = searchcontroller