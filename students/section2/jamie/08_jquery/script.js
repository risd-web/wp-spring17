console.log("hello from external script.js");

$(document).ready(function(){

	$('.button').click(function(){
		console.log("button clicked");
		$('.hi').fadeToggle(100);
	});

	$('#start').click(function(){
		$('.circle').addClass('play');
	});

	$('#stop').click(function(){
		$('.circle').removeClass('play');
	});

	$('.element').hover(function(){
		// console.log("element hover");
		$(this).toggleClass('red');
	});

});

