const angular = require('angular')

const ngAnimate = require('angular-animate')
const toastr = require('angular-toastr')

const routesApp = require('./routes')
const ApiService = require('./services/ApiService')

angular.module('mainApp', [ routesApp, ngAnimate, toastr ])
	.factory('ApiService', ApiService)



