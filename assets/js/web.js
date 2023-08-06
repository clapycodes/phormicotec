"use strict";

/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

// Projects filer menu

document.addEventListener("DOMContentLoaded", () => {
  const filterItems = document.querySelectorAll(".portfolio-filter li");

  filterItems.forEach((item) => {
    item.addEventListener("click", () => {
      filterItems.forEach((item) => {
        item.classList.remove("portfolio-filter-active");
      });

      item.classList.add("portfolio-filter-active");
    });
  });
});

// portfolio filter
document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".list");
  const portfolioBoxes = document.querySelectorAll(".portfolio-box");

  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      const value = item.getAttribute("data-filter");

      if (value === "all") {
        portfolioBoxes.forEach((box) => {
          box.style.display = "block";
        });
      } else {
        portfolioBoxes.forEach((box) => {
          if (!box.classList.contains(value)) {
            box.style.display = "none";
          } else {
            box.style.display = "block";
          }
        });
      }
    });
  });
});

// faq accordion

const accordion = document.querySelectorAll(".accordion"),
  accordionToggle = document.querySelectorAll(".accordion__header"),
  accordionContent = document.querySelectorAll(".accordion__content"),
  accordionIcon = document.querySelectorAll("#accordion-icon");

for (let i = 0; i < accordionToggle.length; i++) {
  accordionToggle[i].addEventListener("click", () => {
    if (
      parseInt(accordionContent[i].style.height) !=
      accordionContent[i].scrollHeight
    ) {
      accordionContent[i].style.height =
        accordionContent[i].scrollHeight + "px";
      accordionIcon[i].classList.replace("ri-add-line", "ri-subtract-fill");
    } else {
      accordionContent[i].style.height = "0px";
      accordionIcon[i].classList.replace("ri-subtract-fill", "ri-add-line");
    }

    for (let j = 0; j < accordionContent.length; j++) {
      if (j !== i) {
        accordionContent[j].style.height = "0px";
        accordionIcon[j].classList.replace("ri-subtract-fill", "ri-add-line");
      }
    }
  });
}
