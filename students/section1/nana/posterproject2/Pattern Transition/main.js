$(document).ready(function() { 
  // your code 
// $('.pattern').hover(function(){
// 	$('.pattern div:nth-child(even)').slideToggle(2000);

// });

$('#play').click(function(){
		$('.pattern div:nth-child(even)').addClass('play');
	})
$('#stop').click(function(){
$('.pattern div:nth-child(even)').removeClass('play');
})

$('.pattern div:nth-child(even)').hover(function(){
	$(this).slideToggle(2000);
})


});
