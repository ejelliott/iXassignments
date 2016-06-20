var app = angular.module("ChommiesApp", ["ngRoute", "firebase"]);
// var CHOMMIES_TOKEN = "ba1c55f06bd6b5f28f46f09ecd744287";

app.config(function($routeProvider){	
	$routeProvider.when("/", {
		templateUrl: "templates/feed.html"
	})
	$routeProvider.when("/me", {
		templateUrl: "templateUrl/me.html"
	})
});

app.controller("FeedCtrl", function($scope, $http, $firebaseArray, $timeout){
	var propRef = firebase.database().ref().child("props");
	var bruRef = firebase.database().ref().child("brus");

	$scope.props = $firebaseArray(propRef);
	$scope.brus = $firebaseArray(bruRef);

	$scope.newProp = {};

  // When I send:
  // - Check sentiment API
  // - Make sure there's a prop
  // - Make sure I'm not the receiver

  $scope.validate = function() {
    $scope.successMessage = "";
    $scope.errorMessage = "";
    if ($scope.newProp.text && $scope.newProp.receiver) {
    	// console.log($scope.newProp.text);

    	$http({
		method: "GET",
		url: "https://twinword-sentiment-analysis.p.mashape.com/analyze/?text=" + $scope.newProp.text,
		headers: { 
				"X-Mashape-Key": "vRCyNb1GSDmshH1wdJ4YRG5QM8oVp10uWfwjsnzere3HiJYfCq" ,
				"Content-Type": "application/x-www-form-urlencoded",
    			"Accept" : "application/json"
		}
	}).then(function(response) {
		console.log(response);
		if(response.data.score > .1) {
		$scope.props.$add($scope.newProp);
		$scope.newProp = {};
      	$scope.successMessage = "Nice! You contributed to the positivity of the world."
      	$timeout(function() {
        $scope.successMessage = "";
      }, 3000);
    } 
		// console.log($scope.newProp.text);
		// $scope.brus = response.data;
	});


      	// console.log($scope.newProp);
      	// $scope.props.$add($scope.newProp);
      // 	$scope.newProp = {};
      // 	$scope.successMessage = "Nice! You contributed to the positivity of the world."
      // 	$timeout(function() {
      //   $scope.successMessage = "";
      // }, 3000);
    } 
    else {
      $scope.errorMessage = "Please make sure to choose a receiver, and add some positive text!"
      $timeout(function() {
        $scope.errorMessage = "";
      }, 3000);
    }
  }

});