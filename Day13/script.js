var app = angular.module("RouterApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "templates/information.html"
  })
  $routeProvider.when("/address", {
    templateUrl: "templates/addressbook.html"
  })
});

app.controller("InfoCtrl", function($scope, $window) {
	$scope.count = 0;
	$scope.thanks = "Thank you for submitting your information";

	$scope.inputType = 'password';
	$scope.pShow = 'Show Password';

	$scope.showPassword = function () {
		if($scope.inputType == 'password') {
			$scope.inputType = 'text';
			$scope.pShow = 'Hide Password';
		}
		else {
			$scope.inputType = 'password';
			$scope.pShow = 'Show Password';
		}
	}

	$scope.action = function () {
		// console.log($scope.name);
		// console.log($scope.phone);
		// console.log($scope.email);
		// console.log($scope.password);
		// console.log($scope.passwordR);

		$scope.warnings = [];

		//name test
		if($scope.name){
			$scope.count = $scope.count + 1;
			$scope.myStyleName = {
				"border-color" : "null"
			}
			// $scope.myStyle1 = {
			// 	"border-color" : "blue"
			// }
			// console.log($scope.myStyle1);
			// $scope.myStyle =
			// console.log($scope.name);
		}
		else{
			$scope.warnings.push("Please submit a name");
			$scope.myStyleName = {
				"border-color" : "red"
			}
			// $scpoe.myStyle = {
			// 	"background-color" : "red"
			// }
			// console.log($scpoe.myStyle);
			// console.log(myStyle);
			// $scope.myStyle={'border-color':'red'};
			// console.log("it knows where it is supposed to go")
		}

		//phone test

		if(!$scope.phone){
			$scope.warnings.push("Phone Number must be XXX-XXX-XXXX");
			$scope.myStylePhone = {
				"border-color" : "red"
			}
		}
		else{
			$scope.phoneTest = $scope.phone.split('-');	

			if($scope.phoneTest.length !== 3 ) {
				$scope.warnings.push("Phone Number must be XXX-XXX-XXXX");
				$scope.myStylePhone = {
				"border-color" : "red"
			}	
			}

			else if(($scope.phoneTest[0].length !== 3)||($scope.phoneTest[0] === NaN)) {
				$scope.warnings.push("Phone Number must be XXX-XXX-XXXX");
				$scope.myStylePhone = {
				"border-color" : "red"
			}	
			}

			else if(($scope.phoneTest[1].length !== 3)||($scope.phoneTest[1] === NaN)) {
				$scope.warnings.push("Phone Number must be XXX-XXX-XXXX");	
				$scope.myStylePhone = {
				"border-color" : "red"
			}
			}

			else if(($scope.phoneTest[2].length !== 4)||($scope.phoneTest[2] === NaN)) {
				$scope.warnings.push("Phone Number must be XXX-XXX-XXXX");
				$scope.myStylePhone = {
				"border-color" : "red"
			}	
			}

			else {
				$scope.count = $scope.count + 1;
				$scope.myStylePhone = {
				"border-color" : "null"
			}
			}

		}
		
		//email test

		if(!$scope.email){
			$scope.warnings.push("Email must be xxxx@xxxx.xx");
			$scope.myStyleEmail = {
				"border-color" : "red"
			}
		}
		else {
			$scope.emailTest1 = $scope.email.split('@');
			if ($scope.emailTest1.length !== 2) {
				$scope.warnings.push("Email must be xxxx@xxxx.xx");
				$scope.myStyleEmail = {
				"border-color" : "red"
			}
			}
			else {
				$scope.emailTest2 = $scope.emailTest1[1].split( '.' );
				if ($scope.emailTest2.length !== 2) {
					$scope.warnings.push("Email must be xxxx@xxxx.xx");
					$scope.myStyleEmail = {
				"border-color" : "red"
			}
				}
				else {
					$scope.count = $scope.count + 1;
					$scope.myStyleEmail = {
				"border-color" : "null"
			}
				}
			}

		}

		//password test
		if(!$scope.password) {
			$scope.warnings.push("Password must be at least 6 characters");
			$scope.myStyleP = {
				"border-color" : "red"
			}
		}
		else {
			if($scope.password.length >= 6){
				$scope.count = $scope.count + 1;
				$scope.myStyleP = {
				"border-color" : "null"
			}
			}
			else{
				$scope.warnings.push("Password must be at least 6 characters");
				$scope.myStyleP = {
				"border-color" : "red"
			}
			}
		}

		//same password test
		if(!$scope.passwordR ) {
			$scope.warnings.push("Password must match");
			$scope.myStylePR = {
				"border-color" : "red"
			}
		}
		else {
			if($scope.passwordR.length !== $scope.password.length){
				$scope.warnings.push("Password must match");
				$scope.myStylePR = {
				"border-color" : "red"
			}
			}
			else {
				for ($scope.i = 0; $scope.i < $scope.passwordR.length; $scope.i = $scope.i + 1) {
					if ($scope.passwordR[$scope.i] !== $scope.password[$scope.i]){
						$scope.warnings.push("Password must match");
						$scope.myStylePR = {
				"border-color" : "red"
			}
					}
					else {
						$scope.count = $scope.count + 1;
						$scope.myStylePR = {
				"border-color" : "null"
			}
					}
				}
			}
			
		}
		if($scope.count == 10){
			$window.location.href = '#/address';

		}

	}
});
	
	app.controller("AddressCtrl", function($scope){
	
	$scope.fullContacts = [];
	$scope.action = function () {
		$scope.contacts = [];
		$scope.count = 0;

		$scope.warnings = [];

		//name test
		if($scope.name){
			$scope.count = $scope.count + 1;
			$scope.thanks = "Successfully added " + $scope.name + " to the contact book";
			$scope.contacts.push($scope.name);
			$scope.name = "";
		}
		else{
			$scope.warnings.push("Please submit a name");
		}

		//phone test

		if(!$scope.phone){
			$scope.warnings.push("Phone Number must be XXX-XXX-XXXX");
		}
		else{
			$scope.phoneTest = $scope.phone.split('-');	

			if($scope.phoneTest.length !== 3 ) {
				$scope.warnings.push("Phone Number must be XXX-XXX-XXXX");	
			}

			else if(($scope.phoneTest[0].length !== 3)||($scope.phoneTest[0] === NaN)) {
				$scope.warnings.push("Phone Number must be XXX-XXX-XXXX");	
			}

			else if(($scope.phoneTest[1].length !== 3)||($scope.phoneTest[1] === NaN)) {
				$scope.warnings.push("Phone Number must be XXX-XXX-XXXX");	
			}

			else if(($scope.phoneTest[2].length !== 4)||($scope.phoneTest[2] === NaN)) {
				$scope.warnings.push("Phone Number must be XXX-XXX-XXXX");	
			}

			else {
				$scope.count = $scope.count + 1;
				$scope.contacts.push($scope.phone);
				$scope.phone = "";
			}

		}
		if($scope.count == 2) {
		$scope.oneline = $scope.contacts.join(" ");
		$scope.fullContacts.push($scope.oneline);
		$scope.oneline = "";
		}
		
	}
	

});
