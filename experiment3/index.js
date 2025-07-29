//add dark class to html element when clicking on input checkbox

const checkbox = document.querySelector('input[type="checkbox"]');
const html = document.querySelector("html");
checkbox.addEventListener("change", () => {
  html.classList.toggle("dark");
});
