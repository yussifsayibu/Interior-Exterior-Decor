//  Navigation bar

function NavBar (){
  const hamburger = document.querySelector('.hamburger');
  const navItem = document.querySelector('.nav-items');

  hamburger.addEventListener('click', function (){

    navItem.classList.toggle('nav-trigger');
    hamburger.classList.toggle('toggle');
  });

}

NavBar ();


// for the copy right year auto update
    
document.addEventListener("DOMContentLoaded", function() {
    var year = new Date().getFullYear();
    var copyright = document.getElementById("copyright");
    copyright.innerHTML = "&copy; " + year + " M@C-Sheff. All rights reserved.";
});

 // reveal on scroll

 const slideInElements = document.querySelectorAll('.slide-in');

 const slideInObserver = new IntersectionObserver(function (entries, observer) {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.classList.add('active');
       // Unobserve the element after it becomes visible to prevent multiple triggers
       observer.unobserve(entry.target);
     }
   });
 }, { threshold: 0.5 });
 
 slideInElements.forEach(element => {
   slideInObserver.observe(element);
 });