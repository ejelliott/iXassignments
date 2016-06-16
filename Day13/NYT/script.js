var app = angular.module("RouterApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/top.html"
  })
  $routeProvider.when("/search", {
    templateUrl: "templates/search.html"
  })
});

app.controller("TopCtrl", function($scope, $http) {
  // THE OLD WAY
  // $.ajax({
  //   method: "GET",
  //   url: "...some url",
  //   success: handleResponse
  // })
  // THE NEW WAY
  $scope.articles = [];
  $http({
    method: "GET",
    url: "https://api.nytimes.com/svc/topstories/v2/opinion.json" +
    "?api-key=6c1830c231564612bbf5484ce7933e27"
  }).then(function(response) {
    $scope.articles = response.data.results;
    console.log(response.data.results);
  });
});

app.controller("SearchCtrl", function($scope, $http) {
  $scope.searchTerm = "";
  // var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  // url += '?' + 
  // "api-key=d1ab3881d902443ebea6ed6b8a803b34" +
  // "&q=" + $scope.searchTerm;
  $scope.searchResults = [];
  $scope.search = function() {
    console.log("search clicked");
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + 
    "api-key=d1ab3881d902443ebea6ed6b8a803b34" +
    "&q=" + $scope.searchTerm;
    $http({
      method: "GET",
      url: url 
    }).then(function(results) {
      $scope.searchResults = results.data.response.docs;
      console.log(results.data.response.docs);
    });
    // Code for search here.
  };
});