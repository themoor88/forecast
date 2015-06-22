'use strict';

/**
 * @ngdoc overview
 * @name forecastApp
 * @description
 * # forecastApp
 *
 * Main module of the application.
 */
angular
  .module('forecastApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/forecast', {
        templateUrl: 'views/forecast.html',
        controller: 'ForecastCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
