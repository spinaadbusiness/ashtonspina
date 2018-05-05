//sidebar toggle
$("#menu-toggle").click( function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("menuDisplayed");
});
//toggle to show flights
$("#phone-toggle").click( function(e) {
    $("#phonePane").replaceWith("<div>" + "<h3>+31 06 82 88 62 67</h3>" + "</div>");
});
//toggle to show hotels
$("#email-toggle").click( function(e) {
    $("#emailPane").replaceWith("<div>" + "<h3>spinaadbusiness@gmail.com</h3>" + "</div>");
});








