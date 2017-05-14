$(document).ready(function() {

  var banana = $("h3").html();

  console.log(banana);


  $("#trigger").click(function(){


      var h3TextColor = $("h3").css("color");
      console.log("The heading 3 text color is " + h3TextColor);

      $('#message').append("The heading 3 text color is " + h3TextColor);

      $("h3").css("color", "red");

      h3TextColor = $("h3").css("color");
      console.log('After changing, the heading 3 text color is ' + h3TextColor);

  });

  $(".dropdown").click(function(){ //<div class="dropdown"> is my trigger
  	var text = $("dd",this); //store dd of clicked dropdown in 'text' variable
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
