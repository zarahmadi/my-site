//traversing tags

//show link in navbar with click
let btnNavbar = document.querySelector(".btn-nav"),
  linksNavbar = document.querySelector(".navbar-lists");

// eventListener

//show link in navbar with click
btnNavbar.addEventListener("click", showNavbarLinks);

//functions

//show link in navbar with click
function showNavbarLinks() {
  linksNavbar.classList.toggle("show-links");
}

//romove list

let linkNav = document.querySelectorAll(".nav-list");

linkNav.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    linksNavbar.classList.remove("show-links");

    const id =e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});
