// const buttonEl = document.querySelector(".btn");

// buttonEl.addEventListener("mouseover" , (event) =>{
//   const x = event.pageX - buttonEl.offsetTop;
//   const y = event.PageY - buttonEl.offsetLeft;

//  buttonEl.style.setProperty("--xPos", x + "px");
//  buttonEl.style.setProperty("--yPos", y + "px");
// });

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});