const fs = require('fs');
const htmlHome = fs.readFileSync(__dirname + '/home.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
      .when('/', {
        template: htmlHome,
        controller: 'homecontroller'
      })
}
module.exports = configRoutes

