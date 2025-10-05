
//to get value of html element 
let display = document.querySelector(".display");
let previous = document.querySelector(".left");
let next = document.querySelector(".right");
let days = document.querySelector(".days");
let selected = document.querySelector(".selected");

/*let dateToday = new Date();
//let dateToday = new Date()
console.log(dateToday);

console.log(dateToday.getFullYear()); //2025 
console.log(dateToday.getMonth()); //05 
console.log(dateToday.getDate());  //9
console.log(dateToday.getHours()); //17
console.log(dateToday.getMinutes()); //14
console.log(dateToday.getSeconds());//27*/

let date =new Date();

let year = date.getFullYear();
let month = date.getMonth();
/*let formattedDate = date.toLocaleString("en-US", {//This converts the date into a localized string format, using the U.S. English locale ("en-US").
  month: "long",
  year: "numeric",
});
display.innerHTML = `${formattedDate}`;*/

function updateDisplay() {
  let formattedDate = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  display.innerHTML = formattedDate;
}
updateDisplay();
function displayCalendar() {
    
    const firstDay = new Date(year, month, 1);
    const firstDayIndex = firstDay.getDay(); 
    const lastDay = new Date(year, month + 1, 0);
    const numberOfDays = lastDay.getDate(); 


for (let x = 1; x <= firstDayIndex; x++) {
  let div = document.createElement("div");
  div.innerHTML += "";
  days.appendChild(div);
}
for (let i = 1; i <= numberOfDays; i++) {
  let div = document.createElement("div");
  let currentDate = new Date(year, month, i);
  div.dataset.date = currentDate.toDateString();
  div.innerHTML += i;
  days.appendChild(div);
  if (
    currentDate.getFullYear() === new Date().getFullYear() &&
    currentDate.getMonth() === new Date().getMonth() &&
    currentDate.getDate() === new Date().getDate()
  ) {
    div.classList.add("current-date");
  }
}
}
function displaySelected() {
  const dayElements = document.querySelectorAll(".days div");
  dayElements.forEach((day) => {
    day.addEventListener("click", (e) => {
      const selectedDate = e.target.dataset.date;
      selected.innerHTML = `Selected Date : ${selectedDate}`;
    });
  });
}
displaySelected();





previous.addEventListener("click", () => {
  days.innerHTML = "";
  selected.innerHTML = "";
  month-=1;
  if (month < 0) {
    month = 11;
    year = year - 1;
  }
 // month = month - 1;
  console.log(month);
  date.setMonth(month);
    date.setFullYear(year);
  updateDisplay();
  displayCalendar();
  displaySelected();
});



next.addEventListener("click", () => {
  days.innerHTML = "";
  selected.innerHTML = "";

  //month=month+1;
  if (month > 11) {
    month = 0;
    year = year + 1;
  }
  month = month + 1;
  date.setMonth(month);
  updateDisplay();
  displayCalendar();
  displaySelected();
});


/*function updateDisplay() {
  let formattedDate = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  display.innerHTML = formattedDate;
}*/
