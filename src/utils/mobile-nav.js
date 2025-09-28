function mobileNav() {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  let isMobileNavOpen = false;

  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      //mobileNav.style.display = 'flex';
      mobileNav.classList.add("mobile-nav__slide-from-top");
      mobileNav.classList.remove("mobile-nav__slide-to-top");
      document.body.style.overflowY = "hidden";
    } else {
      //mobileNav.style.display = 'none';
      mobileNav.classList.add("mobile-nav__slide-to-top");
      mobileNav.classList.remove("mobile-nav__slide-from-top");
      document.body.style.overflowY = "auto";
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobileNav.classList.add("mobile-nav__slide-to-top");
      mobileNav.classList.remove("mobile-nav__slide-from-top");
      //mobileNav.style.display = 'none';
      document.body.style.overflowY = "auto";
    });
  });
}

export default mobileNav;
