$(document).ready(function(){

	for (var i = 1; i < 100; i++) {
		console.log("index i is " + i);
		$('body').append('<div></div>')
		for( var j = 0; j<5; j++){
			console.log("index j is " + j);
		}
	}


});