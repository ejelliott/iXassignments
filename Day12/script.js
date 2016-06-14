var app = angular.module("TodoApp", []);

app.controller("MainCtrl", function($scope){
	$scope.newItem ="";
	$scope.items = [];

	$scope.addItem = function() {
		$scope.items.push($scope.newItem);
		$scope.newItem = "";
		console.log($scope.items);
	}

	$scope.erase = function (item) {
		var index = $scope.items.indexOf(item);
		$scope.items.splice(index, 1 );
	}
});