/**
* login Module
*
* Description
*/
angular.module('login', [])
	.controller('login', ['$scope', function($scope){
		
		$scope.submit = function(valid){
			if(!valid){
				window.location.assign("/#!/dash")
			}
		}


	}])