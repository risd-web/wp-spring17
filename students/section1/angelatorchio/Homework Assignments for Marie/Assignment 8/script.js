console.log("hello from external script.js"); //just to check that your script is loading in console

$(document).ready(function(){


	$(".rightarm").click(function(){
		$(this).css("background-color", "white");
	});
		$(".leftarm").click(function(){
		$(this).css("background-color", "white");
	});

	$(".head").click(function(){
		$(this).css("background-color", "white");
	});

	$(".body").click(function(){
		$(this).css("background-color", "white");
    });

});