'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
  .controller('HomeCtrl', function($scope, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
      cityService.city = $scope.city;
    });
    // This watcher allows for us to make data available from other views.
  });
