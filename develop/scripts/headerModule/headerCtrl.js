angular.module('hackAManoApp.controllers',[])
	.controller('headerCtrl', ['$scope', '$modal','$rootScope' , function($scope, $modal, $rootScope){
		$scope.open = false;

		$scope.animationsEnabled = true;
		
		$scope.logIn = function(type){

			$rootScope.modalType = type;
			var modalIntsance = $modal.open({
		      templateUrl: 'templates/LogInModule/modalTmpl.html',
		      controller: 'LogInCtrl',
		      size: 'lg'
		    });


		    modalIntsance.result.then(
		    	function(){
		    		$scope.open = true;
		    },  function(){
		    		$scope.open = false;
		    });
		};

		$scope.report = function(){
			var modalIntsance = $modal.open({
				templateUrl: 'templates/reportModule/modalTmpl.html',
				controller : 'reportCtrl',
				size: 'lg'
			});
		};

	
	}]);