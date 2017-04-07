console.log("jquery works");

$(document).ready(function(){
	$('section').click(function(){
		
		$('.eyeBlack').toggleClass('blinkers');
	})
});