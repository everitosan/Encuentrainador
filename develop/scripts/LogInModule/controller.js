(function(){
	'use strict';

	angular.module('hackAManoApp.controllers')
		.config(function(FacebookProvider) {
	      
	      FacebookProvider.init({
	          appId      : '830132337035658',
	          xfbml      : true,
	          version    : 'v2.3'
	        });
	      //FacebookProvider.init('1560451627557497');
	    })
	    .config(['GooglePlusProvider', function(GooglePlusProvider) {
		     GooglePlusProvider.init({
		        clientId: '280340120822-8rqfq4j1pn1ob856g5i1fgpheampuedn.apps.googleusercontent.com',
		        apiKey: 'oeqConTZ-f8MBuS_7PaxntJY'
		     });
		}])
		.controller('LogInCtrl', 
			function LogInCtrl ($scope, Facebook, GooglePlus, $location, $modalInstance, $rootScope,  $firebaseObject) {

				$scope.type = $rootScope.modalType;

				$scope.intentFBLog = function(){
					getLoginStatus();
				};

				$scope.loginGp = function () {
			        GooglePlus.login().then(function (authResult) {
			            console.log(authResult);

			            GooglePlus.getUser().then(function (user) {
			                console.log(user);
			            });
			        }, function (err) {
			            console.log(err);
			        });
			    };

				var login = function() {
			      // From now on you can use the Facebook service just as Facebook api says
			      Facebook.login(function(response) {
			        if(response.status ==="connected") {
			        	me();
			        }
			      });
			    };

			    var getLoginStatus = function() {
			      Facebook.getLoginStatus(function(response) {
			        if(response.status === 'connected') {
			          $scope.loggedIn = true;
			          me();

			        } else {
			          $scope.loggedIn = false;
			          login();
			        }
			        console.log(response);
			      }, {scope:'public_profile, email'});
			    };

			    var me = function() {
			      Facebook.api('/me', function(response) {
			        $scope.user = response;
			        var ref = new Firebase("https://encontrainador.firebaseio.com");

			        var obj = $firebaseObject(ref);

			        obj.user = response;
			        obj.$save().then(function(ref){
			        	console.log(ref);
			        }, function(err){
			        	console.log(err);
			        });

			        $modalInstance.close();
			        $location.url('/searchs');

			      });
			  };
			});
	
})();