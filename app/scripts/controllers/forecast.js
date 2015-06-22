'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
  .controller('ForecastCtrl', function($scope, $resource, $routeParams, cityService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || 2;
    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {callback: 'JSON_CALLBACK'}, {get: {method:'JSONP'} });
    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: $scope.days});
    $scope.convertToFahrenheit = function(degK) {
      return Math.round((1.8 * (degK - 273)) + 32);
    };
    $scope.convertToDate = function(dt) {
      return new Date(dt * 1000);
    };
  });
