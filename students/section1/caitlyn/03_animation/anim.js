
$(document).ready(function(){

	$(".sun").hover(function(){
		// $(".night").fadeIn();
	    $("body").toggleClass('night');
	    $(".sun").toggleClass('moon');
	});

});