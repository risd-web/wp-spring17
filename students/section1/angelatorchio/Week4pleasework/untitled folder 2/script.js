
$(document).ready(function(){

/*	$('.greycircles').click(function(){

		var div = $("div");*/

$(".greycircles").click(function(){
    var div = $("div")

/*    div.animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px'
    });
}); 
*/
    div.animate({height: '150px', opacity: '0.4'}, "slow");
    div.animate({width: '150px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
}); 

});

