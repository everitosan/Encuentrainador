(function(){
	angular.module('hackAManoApp',  [
    'ngRoute',
		'hackAManoApp.directives',
		'hackAManoApp.controllers',
		'hackAManoApp.services',
		]);

	angular.module('hackAManoApp.controllers', []); // Notice the empty array at the end here
	angular.module('hackAManoApp.directives', []); // Notice the empty array at the end here
	angular.module('hackAManoApp.services', []); // Notice the empty array at the end here
})();
