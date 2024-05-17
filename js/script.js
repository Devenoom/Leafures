// When hamburger clicked
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    e.preventDefault();
  }
});

// Login form button
const loginSection = document.querySelector(".login-section");

document.querySelector(".btn").onclick = () => {
  loginSection.classList.toggle("active");
};

const loginMobile = document.querySelector(".login-section");

document.querySelector("#user").onclick = () => {
  loginMobile.classList.toggle("active");
};

const btn2 = document.querySelector(".btn2");

document.addEventListener("click", function (e) {
  if (btn2.contains(e.target)) {
    loginSection.classList.remove("active");
  }
});

// scroll background navbar color
const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", function (e) {
  var scroll_position = window.scrollY;
  if (scroll_position > 50) {
    navbar.style.backgroundColor = "#e7e8e2";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

// scroll logo color
// const logoImg = document.querySelector(".img");

// document.addEventListener("scroll", function (e) {
//   var scroll_position = window.scrollY;
//   if (scroll_position > 50) {
//     logoImg.src = "../project testing 1/img/logo.png";
//   } else {
//     logoImg.src = "../project testing 1/img/logo1.png";
//   }
// });
