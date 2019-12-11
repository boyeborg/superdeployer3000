import doom from "./doom";

function main() {
  const prodButton = document.getElementById("prod");
  const testButton = document.getElementById("test");

  prodButton.addEventListener("mouseover", () => {
    document.querySelector("header").classList.add("crazy-shake");
  });

  prodButton.addEventListener("mouseout", () => {
    document.querySelector("header").classList.remove("crazy-shake");
  });

  prodButton.addEventListener("click", () => {
    doom();
    prodButton.style.display = "none";
    testButton.style.display = "none";
  });

  testButton.addEventListener("mouseover", () => {
    testButton.style.left = `${Math.random() * 80 + 10}%`;
    testButton.style.top = `${Math.random() * 80 + 10}%`;
  });

  testButton.addEventListener("click", () => {
    testButton.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", main);
