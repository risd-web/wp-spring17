console.log("hello from external script.js");

$(document).ready(function(){

	$('.button1').click (function){
		console.log("button clicked");
		$('.button2').fadeToggle(2000);
	}

