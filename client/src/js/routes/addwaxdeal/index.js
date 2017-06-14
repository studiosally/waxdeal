var fs = require('fs');
var htmlAddWaxDeal = fs.readFileSync(__dirname + '/addwaxdeal.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
  		 .when('/addwaxdeal', {
            template: htmlAddWaxDeal,
            controller: 'addwaxdealcontroller'
        })
}

module.exports = configRoutes