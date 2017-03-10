console.log("hello fromt the external script.js");

$(document).ready(function(){

	$('.button').click(function(){
		console.log("button clicked");
		$('.hi').fadeToggle(2000);
	});

});