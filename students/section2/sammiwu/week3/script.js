console.log("hello from external script.js");

$(document).ready(function(){

	$('.eyewhite').hover(function(){
		$(this).toggleClass('play');
	});
	$('.mouth').hover(function(){
		$(this).toggleClass('playy');
	});
	$('.eyeball').hover(function(){
		$(this).toggleClass('playyy');
	});
});
