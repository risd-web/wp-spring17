console.log("hello from external script.js");

	$(document).ready(function(){

		$('#bluerectangle1').click(function(){
			console.log("does this work?");
			$(this).toggleClass('play');
		});
		$('#yellowrectangle1').click(function(){
			$(this).toggleClass('play');
		});
		$('#redrectangle3').click(function(){
			$(this).toggleClass('play');
		});

		$('#yellowrectangle3').click(function(){
			$(this).toggleClass('play');
		});

		$('#redrectangle1').click(function(){
			$(this).toggleClass('play');
		});

	});

