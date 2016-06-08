
$(document).ready(function() {
	var clickCount = 0; //change this strategically!
	//change to o if click count % 2 === 0
	$(".grid-box").click(function(e) {
		var clickedID = e.currentTarget.id; //the id of the box that was clicked.
		clickCount += 1;
		//fill in stuff HERE!
		console.log(clickCount);
		if (clickCount % 2 === 0) {
			$("#" + clickedID).html("O");
		}
		else {
			$("#" + clickedID).html("X");
		}
		 
	});
});