var fs = require('fs');
var htmlContact = fs.readFileSync(__dirname + '/contact.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
     .when('/contact', {
            template: htmlContact,  
            controller: 'contactcontroller'
        })
}
module.exports = configRoutes
