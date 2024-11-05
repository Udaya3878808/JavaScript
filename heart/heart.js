const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const posx = event.offsetX;
  const posy = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = posx + "px";
  spanEl.style.top = posy + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
     spanEl.remove();
  },3000);
});
