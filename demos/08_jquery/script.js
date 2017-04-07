console.log("hello from external script.js");

$(document).ready(function(){

	$('.button').click(function(){
		$('.hi').fadeToggle(1200);
	});

	$('#start').click(function(){
		$('#target').addClass('play');
	});
	
	$('#stop').click(function(){
		$('#target').removeClass('play');
	});

	$('.element').click(function(){
		$(this).toggleClass('play');
	});

});

