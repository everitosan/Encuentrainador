angular.module('hackAManoApp.controllers',[])
	.controller('headerCtrl', ['$scope', '$modal', function($scope, $modal){

		$scope.animationsEnabled = true;
		
		$scope.logIn = function(){

			var modalIntsance = $modal.open({
		      templateUrl: 'templates/LogInModule/modalTmpl.html',
		      controller: 'LogInCtrl',
		      size: 'lg'
		    });
		};

		$scope.signUp = function () {
			var modalIntsance = $modal.open({
		      templateUrl: 'templates/signUpModule/modalTmpl.html',
		      controller: 'signUpCtrl',
		      size: 'lg'
		    });
		};
	}]);