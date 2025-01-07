document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 1;
    // Poll until slides and dots exist in the DOM
    const checkElements = setInterval(() => {
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");

      if (slides.length > 0 && dots.length > 0) {
          clearInterval(checkElements); // Stop checking
          showSlides(slideIndex); // Start the slideshow
      } else {
          console.log("Waiting for slides and dots to load...");
      }
    }, 100); // Check every 100ms
  
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

      if (slides.length === 0 || dots.length === 0) {
        console.error("Slides or dots not found in the DOM.");
        return;
    }
  
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