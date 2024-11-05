const containerEl = document.querySelector(".container");

const carrer = ["youtuber", "student", "dIctor", "Instracture"];
let carreIndex = 0;
let characterIndex = 0;
updateText();
function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h1>I am ${carrer[carreIndex].slice(0,1) === "I"? "an" :"a"} ${carrer[carreIndex].slice(
    0,
    characterIndex
  )}</h1>`;
  if (characterIndex === carrer[carreIndex].length) {
    carreIndex++;
    characterIndex = 0;
  }
  if (carreIndex === carrer.length) {
    carreIndex = 0;
  }
  setTimeout(updateText, 400);
}
