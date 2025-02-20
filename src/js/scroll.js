

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



