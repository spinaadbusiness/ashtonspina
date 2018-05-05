//sidebar toggle
$("#menu-toggle").click( function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("menuDisplayed");
});
//carousel settings
$('.carousel').carousel({
    interval: 3000,
    pause: "hover",
    keyboard: "true"
});
//key functionality for carousel
$(document).bind('keyup', function(e) {
    if(e.which == 39){
        $('#myCarousel').carousel('next');
    }
    else if(e.which == 37){
        $('#myCarousel').carousel('prev');
    }
});
//TODO:: add swipe functionality

//Focus carousel on load
window.onload = function() {
    var position = $(window).scrollTop();
    $('myCarousel').focus()
    $(window).scrollTop(position);
};
if ($(window).width() <= 960) {
   $('.carousel-inner').find('.item').height('40vh');
}
$(window).on('resize', function(){
    if ($(window).width() <= 960) {
       $('.carousel-inner').find('.item').height('40vh');
    }
    else {
       $('.carousel-inner').find('.item').height('60vh');
    }
});










