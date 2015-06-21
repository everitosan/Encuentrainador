(function(){
	angular.module('hackAManoApp.controllers')
	.directive('homeSection3', [function(){

	var definitionObject = {
        restrict: 'E',
        scope: true,
        templateUrl:'templates/homeSection3Module/tmpl.html'
      };

      return definitionObject;

	}]);
})();