function scrollToSection(sectionId) {
    console.log('scroll');
    const element = document.querySelector(`#${sectionId}`);
    element.scrollIntoView();
  }