var fs = require('fs');
var htmlAbout = fs.readFileSync(__dirname + '/about.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
  		 .when('/about', {
            template: htmlAbout,
            controller: 'aboutcontroller'
        })
}

module.exports = configRoutes