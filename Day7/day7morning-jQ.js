// window.onload = function() {
	var div = document.getElementById("color-div");
	console.log( div );
	var form = document.getElementById("form1");
	console.log(form);
	// console.log the values of First Name and Last Name 
	function getFormValues() {  
		//get first name and last name
		//console.log the values
		// var first = document.getElementById("first").value;
		// console.log(first);
		$("#first").value;
		console.log($("#first").val());
		console.log($("#last").val());
		// var last = document.getElementById("last").value;
		// console.log(last);
		// console.log(form.value);


	}

	// Change the color of the div with id "color-div"
	function changeColor() {
		// var div = document.getElementById("color-div");
		// console.log( div );
		// document.getElementById("color-div").style.color = "red";
		$("#color-div").css("color", "red");

	}
