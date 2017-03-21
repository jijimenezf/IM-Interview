// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require angular
//= require angular-rails-templates
//= require angular-ui-router

angular.module('imlearningapp', ['ui.router', 'templates'])
.controller('MainController', ['$scope', 'MainService', function($scope, MainService) {

  $scope.init = function (values) {
  	$scope.students = JSON.parse(values);
  };

  $scope.sortbyname = function(isAscendt) {
  	$scope.students.sort(function (a, b) {
  		if (isAscendt) {
  			return a.firstname < b.firstname ? 1 : -1;
  		}
  		return a.firstname > b.firstname ? 1 : -1;
  	});
  };
  $scope.sortbymovie = function(isAscendt) {
  	$scope.students.sort(function (a, b) {
  		if (isAscendt) {
  			return a.favoritemovie < b.favoritemovie ? 1 : -1;
  		}
  		return a.favoritemovie > b.favoritemovie ? 1 : -1;
  	});
  };
}])
.factory('MainService', [function () {
	var results = {
	  data: []
	};

	return results;
}]);
