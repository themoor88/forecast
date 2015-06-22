'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
  .controller('ForecastCtrl', function($scope, cityService) {
    $scope.city = cityService.city;
  });
