$(document).ready(function(){
	$(document).click(function(){
		var x = event.pageX-50;
		var y = event.pageY-50;
		console.log(x,y);
		$('body').append("<div class='popup' style='top:"+x+"; left:"+y+"'>that's no no.</div>");
	});
});