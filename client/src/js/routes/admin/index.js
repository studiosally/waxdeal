var fs = require('fs');
var htmlAdmin = fs.readFileSync(__dirname + '/panelprofile.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
    .when('/admin', {
    	template: htmlAdmin,
        controller: 'admincontroller'
       })
}
module.exports = configRoutes
