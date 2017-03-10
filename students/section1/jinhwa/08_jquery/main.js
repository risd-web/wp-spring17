$(document).ready(function() {

  var banana = $("h3").html();

  console.log(banana);


  $("#trigger").hover(function(){
      
      // $("h3").html("This <em>is</em> replaced text");
      $("h2").append("Truth is Hard");  


      var h3TextColor = $("h3").css("color");
      console.log("The heading 3 text color is " + h3TextColor);

      $("h3").css("color", "red");
      
      h3TextColor = $("h3").css("color");
      console.log('After changing, "change" the heading 3 text color is' + h3TextColor);
  });

  $(".dropdown").click(function(){
  	var text = $("dd",this);
  	var icon = $(this).children('.toggle');
    
    text.slideToggle(400, function (){
    	if (text.is(':visible')) {
    	             icon.text('–');                
    	        } else {
    	             icon.text('+');                
    	        }        
      console.log("dropdown opened");
    });

    $(this).toggleClass("selected");
  });
});
console.log(8+8);
