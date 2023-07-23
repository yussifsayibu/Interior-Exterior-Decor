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

// Tabs section


document.addEventListener("DOMContentLoaded", function () {
    showTab(1); // Show the first tab when the page loads
  });
  
  function showTab(tabIndex) {
    const tabButtons = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".interior-service");
  
    // Hide all tab contents
    tabContents.forEach((tab) => {
    tab.classList.remove("content-active");
    });
  
    // Deactivate all tab buttons
    tabButtons.forEach((button) => {
    button.classList.remove("service-active");
    });
  
    // Activate the selected tab button and show the corresponding tab content
    tabButtons[tabIndex - 1].classList.add("service-active");
    tabContents[tabIndex - 1].classList.add("content-active");
  }



  // Testimonial slider

let slideIndex = 0;
const slides = document.querySelector('.testimonial-slides');
const totalSlides = slides.childElementCount;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}


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