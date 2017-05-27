$(document).ready(function() {

 $('.startrain').click(function(){
 	$('.line').toggleClass('play')
 	});

  $('.stoprain').click(function(){
 	$('.line').removeClass('play')
 	});


});