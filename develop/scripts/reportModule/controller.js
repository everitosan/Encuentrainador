(function(){
	'use strict';

	angular.module('hackAManoApp.controllers')
		.controller('reportCtrl', 
			function reportCtrl ($scope, $firebaseArray, $modalInstance) {
				$scope.form = {};

				$scope.send = function(){
			        var ref = new Firebase("https://encontrainador.firebaseio.com");

					var list = $firebaseArray(ref);

					console.log(list);
					list.$add($scope.form).then(function(ref){
						console.log('success: '+ ref);
						$modalInstance.close();
					}, function(err){
						console.log('success: '+ err);
						alert("Something went wrong, please try again...");
					});
				};
			});
})();