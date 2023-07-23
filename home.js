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


const heroSlider = document.querySelector(".hero-slider");
const images = ["devon-janse-van-rensburg-DU8Z5djVJtg-unsplash.jpg", "r-architecture-rOk4VSMS3Ck-unsplash.jpg", "trend-K9pU2u0Z5WU-unsplash.jpg"]; // Add more image filenames as needed
let currentImage = 0;

function changeImage() {
heroSlider.style.backgroundImage = `url('asset/images/${images[currentImage]}')`;
currentImage = (currentImage + 1) % images.length;
}

setInterval(changeImage, 5000); // Change image every 5 seconds


// Banner Image

const bannerSlider = document.querySelector(".hero-slider");
const imagesBanner = ["devon-janse-van-rensburg-DU8Z5djVJtg-unsplash.jpg", "r-architecture-rOk4VSMS3Ck-unsplash.jpg", "trend-K9pU2u0Z5WU-unsplash.jpg"]; // Add more image filenames as needed
let currentBannerImage = 0;

function changeBannerImage() {
    bannerSlider.style.backgroundImage = `url('asset/images/${images[currentBannerImage]}')`;
currentImage = (currentBannerImage + 1) % imagesBanner.length;
}

setInterval(changeBannerImage, 5000); // Change image every 5 seconds


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


// Tabs section


  document.addEventListener("DOMContentLoaded", function () {
    showTab(1); // Show the first tab when the page loads
  });

  function showTab(tabIndex) {
    const tabButtons = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".best-items");

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



  // For mobile tabs

  document.addEventListener("DOMContentLoaded", function () {
    showMobileTab(1); // Show the first tab when the page loads
  });

  function showMobileTab(liIndex) {
    const tabButtonMobile = document.querySelectorAll(".tab-mobile");
    const tabContentMobile = document.querySelectorAll(".best-items-mobile");

    // Hide all tab contents
    tabContentMobile.forEach((div) => {
      div.classList.remove("content-active");
    });

    // Deactivate all tab buttons
    tabButtonMobile.forEach((li) => {
      li.classList.remove("tab-active-mobile");
    });

    // Activate the selected tab button and show the corresponding tab content
    tabButtonMobile[liIndex - 1].classList.add("tab-active-mobile");
    tabContentMobile[liIndex - 1].classList.add("content-active");
   
    
  }

  function toggleTabDropdown() {
    const tabDropdown = document.querySelector('.tab-mobile-main');

    const iconElement = document.querySelector('.fa-chevron-up');
  
    // Toggle the "open" class to show or hide the dropdown (for mobile only)

    if (iconElement.style.display = 'none'){
      tabDropdown.classList.toggle('open');
      document.querySelector('.fa-chevron-down').style.display = 'none';
      iconElement.style.display = 'flex';
    }
    
  }

  function closeTabDropdown() {
    const tabDropdown = document.querySelector('.tab-mobile-main');
    tabDropdown.classList.remove('open');

    
  }

  // Event listener to close the dropdown when clicking outside of it (for mobile only)
  document.addEventListener('click', function(event) {
  const tabDropdown = document.querySelector('.tab-mobile-main');
  
  if (!tabDropdown.contains(event.target)) {
    closeTabDropdown();
  }else{
    toggleTabDropdown()
  }
});



  
  

  // social prove counter

  document.addEventListener("DOMContentLoaded", function () {
    // satisfy clients counter
    const counterElement = document.getElementById("counter");
    let count = 0;

    counterElement.style.fontSize = '25px';
    counterElement.style.fontWeight = 'bold';
  
    // Update the counter every 100ms (0.1 seconds)
    const interval = setInterval(function () {
      counterElement.textContent = count;
      counterElement.innerHTML = `${count}+`;
      count++;
      
  
      if (count > 500) {
        clearInterval(interval); // Stop the interval when the count reaches 100
        
      }
    }, 100); // 100 milliseconds (0.1 seconds)

     // Finished projects counter

    const counterProject = document.getElementById("counterProjects");
    let countProject = 0;

    counterProject.style.fontSize = '25px';
    counterProject.style.fontWeight = 'bold';


   
    // Update the counter every 100ms (0.1 seconds)
    const intervalProject = setInterval(function () {
      counterProject.textContent = countProject;
      counterProject.innerHTML = `${countProject}+`;
      countProject++;
      
  
      if (countProject > 700) {
        clearInterval(intervalProject); // Stop the interval when the count reaches 100
        
      }
    }, 100); // 100 milliseconds (0.1 seconds)


    // Years of experience

    const counterYears = document.getElementById("counterYears");
    let countYear = 0;

    counterYears.style.fontSize = '25px';
    counterYears.style.fontWeight = 'bold';


   
    // Update the counter every 100ms (0.1 seconds)
    const intervalYear = setInterval(function () {
      counterYears.textContent = countYear;
      counterYears.innerHTML = `${countYear}+Years`;
      countYear++;
      
  
      if (countYear > 7) {
        clearInterval(intervalYear); // Stop the interval when the count reaches 100
        
      }
    }, 100); // 100 milliseconds (0.1 seconds)

    
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
  
  

