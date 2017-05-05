$(document).ready(function() {

  var banana = $("h3").html();

  console.log(banana);

  var h3Text = $("h3").html();
  $("#message").append("The html of my h3 tag is " + h3Text);

  $("#trigger").click(function(){

   
      $("h3").text("This is new text");
      
      h3Text = $("h3").html();

      $("#message").append('<p>After changing, the heading 3 html is ' + h3Text +'</p>');

  });

  $(".dropdown").click(function(){ //<div class="dropdown"> is my trigger
  	var text = $('dd',this); //store dd of clicked dropdown in 'text' variable
  	var icon = $('.toggle',this); //store .toggle of clicked dropdown in 'icon' variable

    text.slideToggle(400,callbackExample); //slideToggle dd when dropdown is clicked. execute callback function when done.
 
      console.log("text"); 

      function callbackExample(){
       if (text.is(':visible')) { //check if dd is displaying
            icon.text('–');  //if yes, set .toggle text to –              
         } else {
            icon.text('+');  //if not, set .toggle text to +              
         }        
      }

    });

    // $(this).toggleClass("selected"); 
});

console.log(8+8);
