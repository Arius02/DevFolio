
var header = document.querySelector(".home-section")
var nav = document.querySelector(".navbar")
window.onscroll = function () { 
  if(window.scrollY > header.scrollHeight - nav.scrollHeight){
    nav.classList.add("bg-black")
  } else {
    nav.classList.remove("bg-black")
  }
}
var navLinks = document.querySelectorAll(".nav-item")
navLinks.forEach(link => {
  if (!link.classList.contains("dropdown")){
    link.addEventListener("click", function () {
      document.querySelector(".navbar-collapse").classList.remove("show")
      document.querySelector(".navbar-toggler").classList.add("collapsed")
    })
  }
  });

var typed = new Typed("#element", {
  strings: ["Photographer", "Designer", "Developer", "Freelancer"],
  typeSpeed: 150,
  backSpeed: 100,
  loop: true,
});