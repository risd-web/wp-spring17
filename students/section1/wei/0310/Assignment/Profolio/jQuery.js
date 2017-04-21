$(document).ready(function(){
	$("#textSwitch").click(function(){
		$("#text").toggle(500);
	});
	$("#contactBtn").mouseover(function(){
		 $(this).empty().append("<h1>wwang03@risd.edu</h1>");
	});
	$("#contactBtn").mouseout(function(){
		 $(this).empty().append("<h1>contact</h1>");
	});
});

