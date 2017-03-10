
$(document).ready(function(){

	$("div").click(function() {
			$(this).toggleClass("clickedDiv");
			$("body").toggleClass("bgChange");
		});

});