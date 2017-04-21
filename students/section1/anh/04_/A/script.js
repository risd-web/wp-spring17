console.log("hello from external script.js");

$(document).ready(function(){

	$('.button').click(function(){
		$('.hi').fadeToggle(2000);
	});

	$('#play').click(function(){
		$('.circle').addClass('play');
	})

	$('#stop').click(function(){
		$('.circle').removeClass('play');
	})


});

