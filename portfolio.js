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
  const tabContents = document.querySelectorAll(".project-tabs");

  // Hide all tab contents
  tabContents.forEach((tab) => {
  tab.classList.remove("content-active");
  });

  // Deactivate all tab buttons
  tabButtons.forEach((button) => {
  button.classList.remove("tab-active");
  });

  // Activate the selected tab button and show the corresponding tab content
  tabButtons[tabIndex - 1].classList.add("tab-active");
  tabContents[tabIndex - 1].classList.add("content-active");
}


// Load more

function loadMore(){
  const loadBtn = document.querySelector('.js-load-more');
  const hiddenSection = document.querySelector('.js-load-content');

  const lessBtn = document.querySelector('.js-show-less');

  loadBtn.addEventListener('click', function (){
    hiddenSection.style.display = 'flex';
  
    lessBtn.style.display = 'block';
    loadBtn.style.display = 'none';

    if(lessBtn.style.display = 'block'){
      lessBtn.addEventListener('click', function (){
        hiddenSection.style.display = 'none';
        loadBtn.style.display = 'block';
        lessBtn.style.display = 'none';
      });
    }
  });
}

loadMore();

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