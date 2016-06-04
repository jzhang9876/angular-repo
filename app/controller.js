'use strict';

angular.module('myApp.controllers', ['ngMaterial'])
.controller('listController', ['$scope', 'n400Service', function($scope, n400Service) {
	$scope.applications = n400Service.query();
	$scope.searchNumber = "";
	$scope.searchLastName = "";

}])
.controller('detailController', function($scope, $stateParams, n400Service, $location) {
	var id = $stateParams.id;
	$scope.n400 = {};

	if (id && id != '') {
		$scope.n400 = n400Service.get({id:id});
		$scope.n400.$promise.then(function(result){
			$scope.n400 = result;
			$scope.dt = moment($scope.n400.dateOfBirth, 'YYYY-MM-DD').toDate();
		});
	}

	$scope.update = function() {
		//$scope.resetDob();

		if (id) {
			n400Service.update($scope.n400, function(data) {
				alert('N400 updated successfully!');
				$location.path('#/list');
			});
		} else {
			n400Service.save($scope.n400, function(data) {
				alert('N400 added successfully!');
				$location.path('#/list');
			});
		}
	}

	$scope.resetDob = function() {
		if ($scope.dt) {
			$scope.n400.dateOfBirth = moment($scope.dt).format('YYYY-MM-DD');
		} else
		  $scope.n400.dateOfBirth = '';

	}

	$scope.cancel = function() {
		$location.path('#/list');
	}

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.popup1 = {
    opened: false
  };

	$scope.format = 'MM-dd-yyyy';

	$scope.dateOptions = {
    	formatYear: 'yy',
    	startingDay: 1,
    	showWeeks: false,
  	};
}).controller('menuController', ['$scope', '$location', function($scope, $location){
    $scope.isActive = function (viewLocation) {
    	return $location.path().startsWith(viewLocation);
    }
}]);