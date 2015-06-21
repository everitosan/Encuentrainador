(function(){
	angular.module('hackAManoApp.controllers')
	.directive('homeSection2', [function(){

	var definitionObject = {
        restrict: 'E',
        scope: true,
        templateUrl:'templates/homeSection2Module/tmpl.html'
      };

      return definitionObject;

	}]);
})();