const angular = require('angular')
const angularRoute = require("angular-route");

const homecontroller = require('./controllers/homecontroller')
const aboutcontroller = require('./controllers/aboutcontroller')
const contactcontroller = require('./controllers/contactcontroller')
const profilecontroller = require('./controllers/profilecontroller')
const disccontroller = require('./controllers/disccontroller')
const logincontroller = require('./controllers/logincontroller')
const searchcontroller = require('./controllers/searchcontroller')
const addwaxdealcontroller = require('./controllers/addwaxdealcontroller')
const panelprofilecontroller = require('./controllers/panelprofilecontroller')

const configRoutes = require('./config/routes')
const ApiService = require('./services/ApiService.js')

angular.module('mainApp', [ angularRoute ])
    .controller('homecontroller', homecontroller)
    .controller('aboutcontroller', aboutcontroller)
    .controller('contactcontroller', contactcontroller)
    .controller('profilecontroller', profilecontroller)
    .controller('disccontroller', disccontroller)
    .controller('logincontroller', logincontroller)
    .controller('searchcontroller', searchcontroller)
    .controller('addwaxdealcontroller', addwaxdealcontroller)
    .controller('panelprofilecontroller', panelprofilecontroller)
    .factory('ApiService', ApiService)
    .config( configRoutes )

