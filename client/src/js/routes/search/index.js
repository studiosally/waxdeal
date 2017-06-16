var fs = require('fs');
var htmlSearch = fs.readFileSync(__dirname + '/search.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
    .when('/search', {
    	template: htmlSearch,
        controller: 'searchcontroller',
        secure:true 
       })
}
module.exports = configRoutes
