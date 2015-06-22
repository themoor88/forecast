'use strict';

/**
 * @ngdoc function
 * @name forecastApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the forecastApp
 */
angular.module('forecastApp')
  .controller('HomeCtrl', function($scope, $location, cityService) {
    $scope.city = cityService.city;
    $scope.$watch('city', function(){
      cityService.city = $scope.city;
    });
    $scope.submit = function() {
      $location.path('/forecast');
    };
    // This watcher allows for us to make data available from other views.
  });

