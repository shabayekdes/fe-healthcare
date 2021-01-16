new UISearch( document.getElementById( 'sb-search' ) );
$(document).ready(function () {
    if (!$.browser.webkit) {
        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
    }
});

$(document).ready(function(){
$(".navbar-toggler").toggle(
  function(){
    $(".cbp-af-header").addClass("collnav");
    $(".navbar-collapse").addClass("show");
    },
  function(){
    $(".cbp-af-header").removeClass("collnav");
    $(".navbar-collapse").removeClass("show");
});
});
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn-top").style.display = "block";
    } else {
        document.getElementById("btn-top").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/**
 * cbpAnimatedHeader.min.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader=(function(){var b=document.documentElement,g=document.querySelector(".cbp-af-header"),e=false,a=300;function f(){window.addEventListener("scroll",function(h){if(!e){e=true;setTimeout(d,250)}},false)}function d(){var h=c();if(h>=a){classie.add(g,"cbp-af-header-shrink")}else{classie.remove(g,"cbp-af-header-shrink")}e=false}function c(){return window.pageYOffset||b.scrollTop}f()})();

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 */
!function(s){"use strict";function e(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}function n(s,e){(a(s,e)?c:t)(s,e)}var a,t,c;"classList"in document.documentElement?(a=function(s,e){return s.classList.contains(e)},t=function(s,e){s.classList.add(e)},c=function(s,e){s.classList.remove(e)}):(a=function(s,n){return e(n).test(s.className)},t=function(s,e){a(s,e)||(s.className=s.className+" "+e)},c=function(s,n){s.className=s.className.replace(e(n)," ")});var i={hasClass:a,addClass:t,removeClass:c,toggleClass:n,has:a,add:t,remove:c,toggle:n};"function"==typeof define&&define.amd?define(i):s.classie=i}(window);
