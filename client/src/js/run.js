var fs = require('fs');
var htmlHeader = fs.readFileSync(__dirname + '/templates/header.html', 'utf8');
var htmlLoginModal = fs.readFileSync(__dirname + '/templates/login.html', 'utf8');
var htmlRecordModal = fs.readFileSync(__dirname + '/templates/recordmodal.html', 'utf8');
var htmlfooter = fs.readFileSync(__dirname + '/templates/footer.html', 'utf8');

function runAtBegin($templateCache, $rootScope, $location, StorageService, AuthService) {

  $templateCache.put('header.html', htmlHeader);
  $templateCache.put('login.html', htmlLoginModal);
  $templateCache.put('recordmodal.html', htmlRecordModal);
  $templateCache.put('footer.html', htmlfooter);

  if ( AuthService.isLoggedIn() ) {
      const token = StorageService.getToken()
      AuthService.setCredentials(token)
    }

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {

      console.log("route has changed")
      if (next && next.secure) {
        console.log("this route is secured!!")
        if ( !AuthService.isLoggedIn() ) {
          $location.path("/login");
        }
      }

    });
}

module.exports = runAtBegin