window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar1").style.backgroundColor = "black";
  } else {
    document.querySelector(".navbar1").style.backgroundColor = "transparent";
  }
}