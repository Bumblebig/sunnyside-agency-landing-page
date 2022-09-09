"use strict";

const menu = document.querySelector("img.menu");
const navs = document.querySelector("section.mobile-nav");
const empty = document.querySelector(".empty");
const listEl = document.querySelectorAll("li");
const ex = document.querySelectorAll("a");
const buttons = document.querySelectorAll("button");

menu.addEventListener("click", function () {
  empty.classList.remove("hidden");
  navs.classList.remove("hidden");
});

empty.addEventListener("click", function () {
  navs.classList.add("hidden");
  empty.classList.add("hidden");
});

const links = (e) => {
  e.preventDefault();
  alert(
    "This is a static website. These links won't work!! For display purposes only!"
  );
};

listEl.forEach((el) => {
  el.addEventListener("click", links);
});

ex.forEach((el) => el.addEventListener("click", links));
buttons.forEach((el) => el.addEventListener("click", links));
