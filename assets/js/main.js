/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");


/*=============== MENU SHOW ===============*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}


/*=============== MENU HIDDEN ===============*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((item) => item.addEventListener("click", linkAction));


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  
  // When the scroll is reater than 50 viewport height,add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener('scroll', scrollActive);


/*=============== DARK LIGHT THEME ===============*/
//Them change button
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = "ri-sun-line";  //ri-sun-line: name is icon

//Previous selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem("selected-icon");

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  document.body.classList.contains(darkTheme) ? "ri-sun-line" : "ri-sun-line";

//We valifate if the user previously chose a topic
if (selectedTheme) {

    //If the validation is fulfilled, we ask the issue was to know if we activated
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
    themeButton.classList[selectedIcon === "ri-sun-line" ? "add" : "remove"](iconTheme);
}

//Active / deactive the theme manially with the button
themeButton.addEventListener('click', () => {
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon());
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  mobile: true,
  delay: 400,
  reset:true, //Animations repeat
})
sr.reveal(`.home__img, .newsletter__container, .footer__logo, 
          .footer__description, .footer__content, .footer__info`)
sr.reveal(`.home__data`,{origin: 'bottom'})
sr.reveal(`.about__data, .recently__data`, { origin: "left" })
sr.reveal(`.about__img ,.recently__img`, { origin: "right" })
sr.reveal(`.popular__card`, {interval: 100 })