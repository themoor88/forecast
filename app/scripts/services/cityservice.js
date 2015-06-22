'use strict';

/**
 * @ngdoc service
 * @name forecastApp.cityService
 * @description
 * # cityService
 * Service in the forecastApp.
 */
angular.module('forecastApp')
  .service('cityService', function () {
    this.city = 'Toronto, ON';
  });
