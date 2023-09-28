window.onscroll = function() {myFunction()};
        
var header = document.getElementById("nav-main");
var logo = document.getElementById("logo")
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    logo.style.display = 'flex';
  } else {
    header.classList.remove("sticky");
    logo.style.display = "none";
  }
}

