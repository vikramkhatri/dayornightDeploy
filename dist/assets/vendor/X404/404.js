"use strict";
$(function() {
    console.log("In 404.js");
    if ( window.location.pathname === "/404.html" ) {
        console.log("In 404.html");
        $('.display-location-value').text(location.href);
        setTimeout(function(){
            document.location.href="/";
        },2000);
    }
});
