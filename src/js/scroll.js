

function checkScroll() {
    let sections = document.querySelectorAll('section');
    sections.forEach(sec => {
        let top = sec.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        let showPoint = 150;

        if (top < windowHeight - showPoint) {
            sec.classList.add('show'); 
        } else {
            sec.classList.remove('show');
        }
    });
}


// Run the checkScroll function on load and scroll
window.addEventListener('DOMContentLoaded', checkScroll);
window.addEventListener('scroll', checkScroll);

document.addEventListener("DOMContentLoaded", () => {
    // Define the scrollToSection function globally
    window.scrollToSection = function (sectionId) {
      const element = document.querySelector(`#${sectionId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
      }
    };
  });



document.querySelector('[data-collapse-toggle="navbar-default"]').addEventListener('click', function() {
  const navbar = document.getElementById('navbar-default');
  navbar.classList.toggle('hidden');
});


// slideshow carousel js

document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Make the functions globally accessible
  window.plusSlides = function (n) {
    showSlides(slideIndex += n);
  };

  window.currentSlide = function (n) {
    showSlides(slideIndex = n);
  };

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Wrap around logic for the slides
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Remove "active" class from all dots
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and set the active dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
});
