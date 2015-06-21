(function(){
	angular.module('hackAManoApp',  [
		'ui.bootstrap',
		'googleplus',
		'facebook',
    	'ngRoute',
		'hackAManoApp.directives',
		'hackAManoApp.controllers',
		'hackAManoApp.services',
		]);

	angular.module('hackAManoApp.controllers', []); // Notice the empty array at the end here
	angular.module('hackAManoApp.directives', []); // Notice the empty array at the end here
	angular.module('hackAManoApp.services', []); // Notice the empty array at the end here

	angular.module('hackAManoApp')
	.config(['$routeProvider', function($routeProvider){
			$routeProvider
				.when("/",{
					templateUrl: 'templates/homeModule/tmpl.html'
				})
				.when("/searchs", {
					templateUrl: 'templates/homeInModule/tmpl.html'
				});
		}]);

})();
