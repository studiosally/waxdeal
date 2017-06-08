const angular = require('angular')
const angularRoute = require("angular-route");

const homecontroller = require('./controllers/homecontroller')
const contactcontroller = require('./controllers/contactcontroller')
const profilecontroller = require('./controllers/profilecontroller')
const disccontroller = require('./controllers/disccontroller')
const logincontroller = require('./controllers/logincontroller')
const addwaxdealcontroller = require('./controllers/addwaxdealcontroller')
const panelprofilecontroller = require('./controllers/panelprofilecontroller')

const configRoutes = require('./config/routes')
const ApiService = require('./services/ApiService.js')

angular.module('mainApp', [ angularRoute ])
    .controller('homecontroller', homecontroller)
    .controller('contactcontroller', contactcontroller)
    .controller('profilecontroller', profilecontroller)
    .controller('disccontroller', disccontroller)
    .controller('logincontroller', logincontroller)
    .controller('addwaxdealcontroller', addwaxdealcontroller)
    .controller('panelprofilecontroller', panelprofilecontroller)
    .factory('ApiService', ApiService)
    .config( configRoutes )

