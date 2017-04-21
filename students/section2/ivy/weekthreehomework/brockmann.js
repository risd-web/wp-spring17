$(document).ready(function(){
 $("#ul01").hover(function(){
        $(this).css("background-color", "red")
        }, function(){
        $(this).css("background-color", "#eb9406")
    });//hover 

 	$("#li09").hover(function(){
        $(this).css("background-color", "yellow")
        }, function(){
        $(this).css("background-color", "#eb9406")
    });//hover 

    $("#li10").hover(function(){
        $(this).css("background-color", "green")
        }, function(){
        $(this).css("background-color", "#eb9406")
    });//hover 

    $("#li11").hover(function(){
        $(this).css("background-color", "blue")
        }, function(){
        $(this).css("background-color", "#eb9406")
    });//hover 

    $("#li12").hover(function(){
        $(this).css("background-color", "purple")
        }, function(){
        $(this).css("background-color", "#eb9406")
    });//hover 

 $("#button").click(function(){
 	$("#main").slideToggle("slow")

 });//click
});//ready