/*
Function: toggle the visibility of mobile navbar
 */
function toggleNav(){
    let menu = document.getElementById("navbar-mobile");
    if (menu.classList.contains("nav-down")){
      menu.classList.remove("nav-down");
      menu.classList.add("nav-up");
    }
    else{
      menu.classList.remove("nav-up");
      menu.classList.add("nav-down");
    }
  }

  /*
Function: export function for adding event listener to hamburger menu
 */
export function setupNavbar() {
  const button = document.getElementById("hamburger-menu");
  if (button) {
    button.addEventListener("click", toggleNav);
  }
}


  



