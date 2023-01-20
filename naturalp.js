
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


$(function() {
  var text = $(".text");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 5800) {
      text.removeClass("hidden");
    } else {
      text.addClass("hidden");
    }
  });
});

/*===================================*/

$(document).ready(function(){
  $(".btn-danger").click(function(){
    $(".cart-row").remove()[0];
  });
})


