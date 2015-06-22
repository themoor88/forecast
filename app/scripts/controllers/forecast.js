'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
  .controller('ForecastCtrl', function($scope, $routeParams, weatherService, cityService) {
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    $scope.convertToFahrenheit = function(degK) {
      return Math.round((1.8 * (degK - 273)) + 32);
    };
    $scope.convertToDate = function(dt) {
      return new Date(dt * 1000);
    };
  });
