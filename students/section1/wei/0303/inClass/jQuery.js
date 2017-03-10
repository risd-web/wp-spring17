$(document).ready(function(){
	var counter = 0;

	var five = "5";
	var five2 = 5;

	$('#cat').click(function(){
		counter++; 
		console.log(counter);
		if (counter===1){
			$(this).animate({top:'+=500px'})
		}
		if (counter===2){
			$(this).animate({left:'+=600px'})
		}
	});
		
	// $('.stepOne').click(function(){
	// 	console.log("stpone");
	// 	.removeClass('stepOne').addClass('stepTwo');
	// });

	

});

