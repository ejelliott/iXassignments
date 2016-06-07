// change the color of the text in the div with class "color-div" to red
function changeColor() {
	$(".color-div").css("color", "red");

}

// add the word "blue" to the div with class "add-div"
function addToDiv() {
	$(".add-div").append(" blue");
}

// add a title to the page
function addTitle() {
	$(".title-div").text("title");
	
}

// alert the text in the selected item of the dropdown
function getSelected() {
	alert($("#selector option:selected").text());
}

// change the title to be "New Title"
function changeText() {
	$(".title-div").text("New Title");

}

$(document).ready(function() {
	addToDiv();
	// getSelected();
  $('.the-button').click(function(){ 
    //hint: what goes in here?
    //changeColor
    changeColor();
   	});

  $('.get-selected').click(function(){ 
    //getselected
      	getSelected();
	});

  $('.text-changer').click(function(){ 
    //changetext
      	changeText();
	});
	
  $(".trio").click(function (e) {
    //hint: look at the currentTarget property
    //you clicked on id:name
    console.log($(".trio"));
    $(".clicked-id").html("you clicked on id: " + $(this).attr("id"));
  });

});