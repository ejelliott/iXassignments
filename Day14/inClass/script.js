var app = angular.module("PositiveApp", ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "/feed.html"
	})
	$routeProvider.when("/personal", {
		templateUrl: "/personal.html"
	})
});



app.controller('FeedCtrl', function($scope, $http) {
	$scope.brus = [];
	$scope.props = [];
	// console.log($error);

	//refresh
	$scope.loadData = function () {
		window.location.reload(); 
		console.log("plz");

 	}


	//validate
	$scope.validate = function(){
		console.log("click");
		$http({
			method: "POST",
			url: "http://ixchommies.herokuapp.com/props",
			params: { 
				token : "cb22cdd683008dd28a7f28c8393aedb3",
			},
			data: {
				props: $scope.newProp.text,
				for: $scope.newProp.receiver.id,
			}
		}).then(function(response) {
			$scope.eM = false;
			// console.log(response);
		})
  			.catch(function(fallback) {
    		console.log(fallback.data.message);
    		$scope.errorM = fallback.data.message;
    		$scope.eM = true;
  		});
	}
	$http({
		method: "GET",
		url: "http://ixchommies.herokuapp.com/brus" +
		"?token=cb22cdd683008dd28a7f28c8393aedb3"
	}).then(function(response) {
		$scope.brus = response.data;
	});
	$http({
		method: "GET",
		url: "http://ixchommies.herokuapp.com/props" +
		"?token=cb22cdd683008dd28a7f28c8393aedb3"
	}).then(function(response) {
		$scope.props = response.data;
		// console.log($scope.props);
    // $scope.brus = response.data;
});

});

app.controller('MeCtrl', function($scope, $http) {
	$http({
		method: "GET",
		url: "http://ixchommies.herokuapp.com/props/me" +
		"?token=cb22cdd683008dd28a7f28c8393aedb3",
	}).then(function(response) {
		// if(response.data.receiver.id =)
		$scope.props = response.data;
		// console.log($scope.props);
    // $scope.brus = response.data;
});
});

