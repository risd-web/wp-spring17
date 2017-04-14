$(document).ready(function() {

  $(".dropdown").click(function(){
    var text = $("dd",this);
    var icon = $(this).children('.sectionHeading p specialSpacingforthePlus .toggle');
    
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
