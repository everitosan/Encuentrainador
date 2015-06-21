(function(){
	angular.module('hackAManoApp.controllers')
	.directive('homeSection4', [function(){

	var definitionObject = {
        restrict: 'E',
        scope: true,
        templateUrl:'templates/homeSection4Module/tmpl.html'
      };

      return definitionObject;

	}]);
})();