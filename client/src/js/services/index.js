const angular = require('angular')
const angularJwt = require('angular-jwt')

const ApiService = require('./ApiService')
const AuthService = require('./AuthService')
const AuthInterceptor = require('./AuthInterceptor')
const StorageService = require('./StorageService')

angular.module('waxdealAppServices', [ angularJwt ])
  .factory('ApiService', ApiService)
  .factory('AuthService', AuthService)
  .factory('AuthInterceptor', AuthInterceptor)
  .factory('StorageService', StorageService)

module.exports = 'waxdealAppServices'
