console.log("hello from external script.js"); //just to check that your script is loading in console

$(document).ready(function(){

	$('.button').click(function(){
		console.log("test button");
		$('h1').fadeToggle(1200);
	});

	$('#start').click(function(){
		$('#target').addClass('play');
	});
	
	$('#stop').click(function(){
		$('#target').removeClass('play');
	});

	$('.circle').click(function(){
		$('#target').toggleClass('play');
	});

	$('.element').click(function(){
		$(this).toggleClass('play');
	});
	
});

