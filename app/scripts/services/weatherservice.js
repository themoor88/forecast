'use strict';

/**
 * @ngdoc service
 * @name forecastApp.weatherService
 * @description
 * # weatherService
 * Service in the forecastApp.
 */
angular.module('forecastApp')
  .service('weatherService', function($resource) {
    this.GetWeather = function(city, days) {
      var weatherAPI =
        $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {callback: 'JSON_CALLBACK'}, {get: {method:'JSONP'} });
        return weatherAPI.get({ q: city, cnt: days });
    };
  });
