$(document).ready(function() {
	$("#submit-btn").click(function() {
		phoneValidator($("#phone").val());
		emailValidator($("#email").val());
	});
});

function phoneValidator(phoneNum) {
	// console.log("testgood");
//check that phone number is in xxx-xxx-xxxx
var phoneTest = phoneNum.split('-');;
if(phoneTest.length !== 3) {
	console.log("no");
	$("#test1").text("no");
}
else if((phoneTest[0].length !== 3)||(phoneTest[0] !== NaN)) {
	console.log("no");
	$("#test1").text("no");
}
else if((phoneTest[1].length !== 3)||(phoneTest[1] !== NaN)) {
	console.log("no");
	$("#test1").text("no");
}
else if((phoneTest[2].length !== 4)||(phoneTest[2] !== NaN)) {
	console.log("no");
	$("#test1").text("no");
}
else {
	console.log("yes");
	$("#test1").text("yes");
}
}

function emailValidator(email) {
	// var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
 // 	var valid = emailReg.test(email);
 // 	if(!valid) {
 // 		console.log("no");&amp;
 // 	}
 // 	else {
 // 		console.log("yes");
 // 	}
 var emailTest1 = email.split('@');
// var emailTest2 = emailTest1[1].split( '.' );
if (emailTest1.length !== 2) {
	console.log("no");
	$("#test2").text("no");
}
// if (emailTest2.length !== 2) {
// 	console.log("no");
// }
else {
	var emailTest2 = emailTest1[1].split( '.' );
	if (emailTest2.length !== 2) {
		console.log("no");
		$("#test2").text("no");
	}
	else {
		console.log("yes");
		$("#test2").text("yes");
	}
}
// check that email is in something@something.som
}
//phoneValidator(phoneNum), emailValidator(email)