const angular = require('angular')
const angularRoute = require("angular-route");
const angularTable = require("ng-table")

const configRouteHome = require('./home')
const HomeController = require('./home/homecontroller')

const configRouteAbout = require('./about')
const AboutController = require('./about/aboutcontroller')

const configRouteContact = require('./contact')
const ContactController = require('./contact/contactcontroller')

const configRouteAdmin= require('./admin')
const Admincontroller = require('./admin/admincontroller')

const configRouteRegister = require('./register')
const RegisterController = require('./register/RegisterController')

const configRouteLogin = require('./login')
const LoginController = require('./login/LoginController')

const configRouteLogout = require('./logout')
const LogoutController = require('./logout/LogoutController')

const configRouteAddWaxDeal = require('./addwaxdeal')
const AddWaxDealController = require('./addwaxdeal/addwaxdealcontroller')

const configRouteEditWaxDeal = require('./editwaxdeal')
const EditWaxDealController = require('./editwaxdeal/editwaxdealcontroller')

const configRouteSearch = require('./search')
const SearchController = require('./search/searchcontroller')


angular.module('waxDealAppRoutes', [ angularRoute, "ngTable" ])

  // Route /
  .controller('homecontroller', HomeController)
  .config( configRouteHome )

  // Route /about
  .controller('aboutcontroller', AboutController)
  .config( configRouteAbout )

  // Route /contact
  .controller('contactcontroller', ContactController)
  .config( configRouteContact )

  // Route /panelprofile
  .controller('admincontroller', Admincontroller)
  .config( configRouteAdmin)

    // Route /addwaxdeal
  .controller('addwaxdealcontroller', AddWaxDealController)
  .config( configRouteAddWaxDeal)


    // Route /editwaxdeal
  .controller('editwaxdealcontroller', EditWaxDealController)
  .config( configRouteEditWaxDeal)


      // Route /search
  .controller('searchcontroller', SearchController)
  .config( configRouteSearch)

   // Route /register
  .controller('RegisterController', RegisterController)
  .config( configRouteRegister )
  
  // Route /login
  
  .controller('LoginController', LoginController)
  .config( configRouteLogin )

   // Route /logout
  .controller('LogoutController', LogoutController)
  .config( configRouteLogout )


module.exports = 'waxDealAppRoutes'