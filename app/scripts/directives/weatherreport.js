'use strict';

/**
 * @ngdoc directive
 * @name forecastApp.directive:weatherReport
 * @description
 * # weatherReport
 */
angular.module('forecastApp')
  .directive('weatherReport', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/weatherreport.html',
      replace: true,
      scope: {
        weatherDay: '=',
        convertToStandard: '&',
        convertToDate: '&',
        dateFormat: '@'
      }
    };
  });
