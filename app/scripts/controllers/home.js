'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
