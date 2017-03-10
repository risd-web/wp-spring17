console.log("hello from external script.js");

$(document).ready(function(){

	$('.watertext').click(function(){
		$('.water2').slideToggle(700);
	});

	$('.ricetext').click(function(){
		$('.ricecup2').slideToggle(700);
	});
	$('.button1').click(function(){
		$('.button2').fadeToggle(100);
	});
	$('h2').click(function(){
		$('.').fadeToggle(100);
	});

});
