$(document).ready(function(){
	var w;
	
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
});

