angular.module('hackAManoApp.directives',[])
	.directive('header', function(){

		return {
			restrict: 'E',
			templateUrl: "templates/headerModule/headerTmpl.html"
		};
	});