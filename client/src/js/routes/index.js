const angular = require('angular')
const angularRoute = require("angular-route");
const angularTable = require("ng-table")

const configRouteHome = require('./home')
const HomeController = require('./home/homecontroller')

const configRouteAbout = require('./about')
const AboutController = require('./about/aboutcontroller')

const configRouteContact = require('./contact')
const ContactController = require('./contact/contactcontroller')

const configRoutePanelProfile = require('./panelprofile')
const PanelProfileController = require('./panelprofile/panelprofilecontroller')

const configRouteAddWaxDeal = require('./addwaxdeal')
const AddWaxDealController = require('./addwaxdeal/addwaxdealcontroller')

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
  .controller('panelprofilecontroller/', PanelProfileController)
  .config( configRoutePanelProfile)

    // Route /addwaxdeal
  .controller('addwaxdealcontroller/', AddWaxDealController)
  .config( configRouteAddWaxDeal)

      // Route /search
  .controller('searchcontroller/', SearchController)
  .config( configRouteSearch)


module.exports = 'waxDealAppRoutes'