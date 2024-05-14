import "./style.css";

const dropMenu = document.querySelectorAll(".dropdown-menu");

dropMenu.forEach((x) =>
  x.addEventListener("mouseenter", () => {
    x.querySelector(":first-child").removeAttribute("hidden");
  })
);

dropMenu.forEach((x) =>
  x.addEventListener("mouseleave", () => {
    x.querySelector(":first-child").setAttribute("hidden", true);
  })
);
