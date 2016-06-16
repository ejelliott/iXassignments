var app = angular.module("FormApp", []);


app.controller("FormCtrl", function($scope){
	
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