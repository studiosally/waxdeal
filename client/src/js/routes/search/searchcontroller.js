var fs = require('fs');
var htmlSearch = fs.readFileSync(__dirname + '/search.html', 'utf8');

function searchcontroller($scope){
 	$routeProvider
  		 .when('/search', {
            template: htmlSearch,
            controller: 'searchcontroller'
        })

}
module.exports = searchcontroller