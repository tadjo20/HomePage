$(document).ready(function(){
    $('div').fadeIn('slow');
    console.log("Stay a while and listen...");
   // alert("on Load");
    console.log( $("body").css("background-color"));
   // console.log( $("p").css().getComputedStyle());
});
$(window).mouseleave( function(){
    console.log("NO dont leave meeee2" +  $("body").css("background-color"));
    $("body").css("background-color","black")  ;

})
