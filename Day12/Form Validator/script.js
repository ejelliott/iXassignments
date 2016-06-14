var app = angular.module("FormApp", []);

app.controller("FormCtrl", function($scope){

	$scope.action = function () {
		console.log($scope.newItem);
		console.log($scope.secondItem);
		if ($scope.newItem && $scope.secondItem){
			console.log("ok");
		}
		else {
			console.log("not ok");
		}
	}

});