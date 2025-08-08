const element = document.querySelector("#first-div");

element.innerHTML = "<a href='https://www.google.com' >Home</a>";

element.style.backgroundColor = "red";
element.style.padding = "10px";
element.style.borderRadius = "10px";

// element.classList.add("new")
// element.classList.remove("box")

const btn = document.createElement("button");

btn.innerText = "Click Me";

document.body.appendChild(btn);

btn.addEventListener("click", (event) => {
  btn.innerText = "Clicked";
});
btn.addEventListener("dblclick", (e) => {
  btn.innerText = "Click Me";
});
