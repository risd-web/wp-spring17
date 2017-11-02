$(document).ready(function(){
	var w;
	var pen = 12;
	
		$(".previewBox").hover(function(){
			w = $( window ).width();
			if (w > 770){
    			$(this).find("div").fadeIn(200);
    					}
    		}, function(){
    		if (w > 770){
    			$(this).find("div").stop().hide();
    					}
		});
	alert("You have been sentenced to "+pen+" years for approaching this sensitive document!");
});

