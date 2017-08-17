console.log("hello from external script.js"); //just to check that your script is loading in console

$(document).ready(function(){


	$(".topbluesquare").click(function(){
		$(this).hide("slow")
	});
		$(".topbluesquare").click(function(){
		$(this).show("slow")
	});

	$(".middlebluesquare").click(function(){
		$(this).css("background-color", "pink");
	});

	$(".bottombluesquare").click(function(){
		$(this).css("color", "red").slideUp(2000).slideDown(2000);
    });

});