$(document).ready(function() {
	// var press = $("#list").keypress(function(e) {
	// 	console.log("enter!")
	// });

	$("#todo-input").keyup(function(e) {
		if(e.keyCode === 13) {
			addToList($("#todo-input").val());
		}
	});
});
function addTolist(value) {
		var li = $("<li></li>").html(value); 
		$("#list").append(li);
	}

