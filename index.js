$(window).ready(function () {
  $(".boton").wrapInner("<div class=botontext></div>");

  $(".botontext").clone().appendTo($(".boton"));

  $(".boton").append(
    '<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>'
  );

  $(".twist").css("width", "25%").css("width", "+=3px");
});

const menu = document.querySelector(".nav");
const menuItems = document.querySelectorAll(".nav__list");
const hamburger = document.querySelector(".square");
// const closeIcon= document.querySelector(".close-button");
const menuIcon = document.querySelector(".burgerwrap");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    // closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    // closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

$(document).ready(function () {
  $(".nav__menu").click(function () {
    $(".nav__item-list").toggleClass("visible");
  });
});

