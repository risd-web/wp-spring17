$(document).ready(function() {

  // var hText = $("h3").text();

  // console.log(hText);

  $("#trigger").hover(function(){
      // $("h3").text("This is replaced text");
      // $("h2").append(" this is appended via jQuery");      
      var h3TextColor = $("h3").css("color");
      console.log("The heading 3 text color is " + h3TextColor);
      $("body").css('background-image','url(https://68.media.tumblr.com/c3c7960114f3bbb75ad1a4d5774777cb/tumblr_o5j3dlxBXV1qag82ko1_1280.jpg)');

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

  $(".dropdown").hover(function(){
     $("body").css('background-image','url(https://68.media.tumblr.com/8293de1fc0df2cfa7a6b7b6c8e9267c4/tumblr_ofnuc6QFmF1rvvyydo1_1280.jpg)');
  });

});
console.log(8+8);
