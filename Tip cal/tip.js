const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const Calculate = document.getElementById("calculate");
const total = document.getElementById("total");

function calculateTotal() {
  const newBill = billInput.value;
  const newtip = tipInput.value;
  const totalValue = newBill * (newtip / 100);
  total.innerText = totalValue.toFixed(2);
}
Calculate.addEventListener("click", calculateTotal);


