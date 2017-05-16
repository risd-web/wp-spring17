console.log("hello from external script.js");

$(document).ready(function(){
	$('.sushibutton').click(function(){
		$('.cake').hide();
		$('.salad').hide();
		$('.sushis').show();
	});
});

$(document).ready(function(){
	$('.cakebutton').click(function(){
		$('.salad').hide();
		$('.sushis').hide();
		$('.cake').show();
	});
});

$(document).ready(function(){
	$('.saladbutton').click(function(){
		$('.cake').hide();
		$('.sushis').hide();
		$('.salad').show();
	});
});

$(document).ready(function(){
	$('.sushis').click(function(){
		$('.sushis').hide();
	});
});

$(document).ready(function(){
	$('.salad').click(function(){
		$('.salad').hide();
	});
});

$(document).ready(function(){
	$('.cake').click(function(){
		$('.cake').hide();
	});
});









