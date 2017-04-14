console.log("jquery works");


$(document).ready(function(){
	console.log("ready");
	$('section').hover(function(){	
		$('.text1').toggleClass('hovered1');
		$('.text2').toggleClass('hovered2');
		$('.text3').toggleClass('hovered3');
		$('.text4').toggleClass('hovered4');
		$('.text5').toggleClass('hovered5');
	})
});