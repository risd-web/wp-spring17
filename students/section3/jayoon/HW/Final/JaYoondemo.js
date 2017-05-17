$(document).ready(function() {

  $('.dropdown').click(function(){
    $('dd', this).slideToggle();
  });

  $("#message").append("The html of my h3 tag is " + h3Text);

  $("#trigger").click(function(){


      $("h3").text("This is new text");

      h3Text = $("h3").html();

      $("#message").append('<p>After changing, the heading 3 html is ' + h3Text +'</p>');

  });
