const month = document.getElementById("month-name");
const day = document.getElementById("day-name");
const num = document.getElementById("day-num");
const year = document.getElementById("year-name");

const date = new Date();

month.innerText = date.toLocaleString("en", {
  month: "long"
})

day.innerText = date.toLocaleString("en",{
    weekday:"long"
})
num.innerText = date.getDate()

year.innerText = date.getFullYear()