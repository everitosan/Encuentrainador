(function(){
	angular.module('hackAManoApp.controllers')
	.directive('homeSection1', [function(){

	var definitionObject = {
        restrict: 'E',
        scope: true,
        templateUrl:'templates/homeSection1Module/tmpl.html'
      };

      return definitionObject;

	}]);
})();