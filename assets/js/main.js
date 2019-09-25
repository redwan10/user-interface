(function($){
    "use strict";
    // Mobile menu
    jQuery('#mobile-menu-active').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });





})(jQuery);







//  var acc = document.getElementsByClassName("dropdown");
//  var i;
//  for (i = 0; i < acc.length; i++) {
//    acc[i].addEventListener("click", function() {
//      this.classList.toggle("active");
//      var panel = this.nextElementSibling;
//      if (panel.style.display === "block") {
//        panel.style.display = "none";
//      } else {
//        panel.style.display = "block";
//      };
//    });
//  }


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


