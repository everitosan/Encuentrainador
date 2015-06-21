angular.module('hackAManoApp.controllers',['ui.bootstrap'])
	.controller('headerCtrl', ['$scope', function($scope){

		$scope.animationsEnabled = true;
		$scope.login = function(){

			var modalInstance = $modal.open({
      			animation: $scope.animationsEnabled,
		      	templateUrl: 'myModalContent.html',
		      	controller: 'ModalInstanceCtrl',
		     	size: size,
		      	resolve: {
		        items: function () {
		          return $scope.items;
		        }
		      }
		    });
		};
	}]);