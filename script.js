$(document).ready(function(){
    $('div').fadeIn('slow');
    console.log("Stay a while and listen...");
   // alert("on Load");
    console.log( $("body").css("background-color"));
   // console.log( $("p").css().getComputedStyle());
});
$(window).mouseleave( function(){
<<<<<<< HEAD
    console.log("NO dont leave meeee2" +  $("body").css("background-color"));
    $("body").css("background-color","black")  ;

})
=======
    console.log("NO dont leave meeee2");
    //$("body").css("background-color","black")  ;

})
function    clickIt(){
    console.log("Ya... We dont work yet...");
}
//$(document).click(clickIt());
//element.attachEvent(click,clickIt);
//document.createEventObject(
//    clickIt()
//
//)
>>>>>>> b3f8f70f72713220e0f97f2674427e68d027d848
