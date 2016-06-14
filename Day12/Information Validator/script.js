var app = angular.module("FormApp", []);


app.controller("FormCtrl", function($scope){
	$scope.count = 0;
	$scope.thanks = "Thank you for submitting your information";

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
			// console.log($scope.name);
		}
		else{
			$scope.warnings.push("Please submit a name");
			// console.log("it knows where it is supposed to go")
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
			}

		}
		
		//email test

		if(!$scope.email){
			$scope.warnings.push("Email must be xxxx@xxxx.xx");
		}
		else {
			$scope.emailTest1 = $scope.email.split('@');
			if ($scope.emailTest1.length !== 2) {
				$scope.warnings.push("Email must be xxxx@xxxx.xx");
			}
			else {
				$scope.emailTest2 = $scope.emailTest1[1].split( '.' );
				if ($scope.emailTest2.length !== 2) {
					$scope.warnings.push("Email must be xxxx@xxxx.xx");
				}
				else {
					$scope.count = $scope.count + 1;
				}
			}

		}

		//password test
		if(!$scope.password) {
			$scope.warnings.push("Password must be at least 6 characters");
		}
		else {
			if($scope.password.length >= 6){
				$scope.count = $scope.count + 1;
			}
			else{
				$scope.warnings.push("Password must be at least 6 characters");
			}
		}

		//same password test
		if(!$scope.passwordR ) {
			$scope.warnings.push("Password must match");
		}
		else {
			if($scope.passwordR.length !== $scope.password.length){
				$scope.warnings.push("Password must match");
			}
			else {
				for ($scope.i = 0; $scope.i < $scope.passwordR.length; $scope.i = $scope.i + 1) {
					if ($scope.passwordR[$scope.i] !== $scope.password[$scope.i]){
						$scope.warnings.push("Password must match");
					}
					else {
						$scope.count = $scope.count + 1;
					}
				}
			}
			
		}

	}
	

});