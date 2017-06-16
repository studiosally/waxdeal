var fs = require('fs');
var htmleditwaxdeal = fs.readFileSync(__dirname + '/editwaxdeal.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
     .when('/editwaxdeal/:id', {
            template: htmleditwaxdeal,  
            controller: 'editwaxdealcontroller',
            secure: true
        })
}
module.exports = configRoutes
