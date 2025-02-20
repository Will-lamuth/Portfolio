document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 1;

    showSlides();
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