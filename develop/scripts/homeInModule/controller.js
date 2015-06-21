(function(){
	'use strict';

	angular.module('hackAManoApp.controllers')
		.controller('homeInCtrl', 
			function homeInCtrl ($scope, $firebaseArray) {



				var ref = new Firebase("https://encontrainador.firebaseio.com");
				var list = $firebaseArray(ref);

				 $scope.list = list;
				 console.log($scope.list);
				

			});
})();