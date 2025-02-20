function toggleNav(){
    let menu = document.getElementById("navbar-mobile");
    menu.style.display === "block"? menu.style.display = "none" : menu.style.display = "block" 
  }

export function setupNavbar() {
  const button = document.getElementById("hamburger-menu");
  if (button) {
    button.addEventListener("click", toggleNav);
  }
}


  



