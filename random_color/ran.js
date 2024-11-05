const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorContainerl = document.createElement("div");  // creating element
  colorContainerl.classList.add("color-container");   // adding name for the element
  containerEl.appendChild(colorContainerl);
}

const colorContainers = document.querySelectorAll(".color-container");
generate();
function generate (){
    colorContainers.forEach((colorContainerl) =>{
      const newColor = randomcolor();
     colorContainerl.style.backgroundColor = "#"+ newColor;
     colorContainerl.innerText = "#" + newColor;
    });
}


function randomcolor() {
  const char = "0123456789abcdef";
  const colorLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorLength; index++) {
    const randomNum = Math.floor(Math.random() * char.length);
    colorCode += char.substring(randomNum, randomNum + 1 ) ; // to increse the random number 
  }
  return colorCode;
}

// const containerEl = document.querySelector(".container");

// for (let index = 0; index < 30; index++) {
//   const colorContainerEl = document.createElement("div");
//   colorContainerEl.classList.add(".color-container");
//   containerEl.appendChild(colorContainerEl);
// }

// const colorContainerEls = document.querySelectorAll(".color-container");

// generateColors();

// function generateColors() {
//   colorContainerEls.forEach((colorContainerEl) => {
//     const newColorCode = randomColor();
//     colorContainerEl.style.backgroundColor = "#" + newColorCode;
//     colorContainerEl.innerText = "#" + newColorCode;
//   });
// }

// function randomColor() {
//   const chars = "0123456789abcdef";
//   const colorCodeLength = 6;
//   let colorCode = "";
//   for (let index = 0; index < colorCodeLength; index++) {
//     const randomNum = Math.floor(Math.random() * chars.length);
//     colorCode += chars.substring(randomNum, randomNum + 1);
//   }
//   return colorCode;
// }
