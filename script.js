"use strict";
// const divEl = document.querySelector("div.form");
// const btnEl = divEl.querySelector("button.btn");
// const checkEl = divEl.querySelector("input.check");
// btnEl.addEventListener("click", (e) => {
//   if (!checkEl.checked) {
//     const spanEl = document.createElement("p");
//     spanEl.innerHTML = "Необходимо согласиться с условиями";
//     divEl.appendChild(spanEl);
//   }
// });

// const divEl = document.querySelector("div.container");
// const btnTeaEl = divEl.querySelector("input.teaBtn");
// const btnCoffeEl = divEl.querySelector("input.coffeeBtn");
// const btnEl = divEl.querySelector("button.btn");
// btnEl.addEventListener("click", (e) => {
//   if (btnTeaEl.checked) {
//     console.log("Чай закончился");
//   } else if (btnCoffeEl.checked) {
//     console.log("Кофе закончился");
//   } else {
//     console.log("Ничего не выбрано");
//   }
// });

// const pass = "12345";
// const divEl = document.querySelector("div.container");
// const inputEl = divEl.querySelector("input.password");
// const btnEl = divEl.querySelector("button.btn");
// btnEl.addEventListener("click", (e) => {
//   if (inputEl.value === pass) {
//     inputEl.classList.remove("bord-red");
//     inputEl.classList.add("bord-green");
//   } else {
//     inputEl.classList.remove("bord-green");
//     inputEl.classList.add("bord-red");
//   }
// });

const divEl = document.querySelector("div.container");
const inputEl = divEl.querySelector("input.input");
const h2El = divEl.querySelector("h2.text");
const h3El = divEl.querySelector("h3.h3class");
inputEl.addEventListener("input", (e) => {
  //   e.stopPropagation();
  h2El.innerHTML = e.target.value;
});
inputEl.addEventListener("change", (e) => {
  h3El.innerHTML = e.target.value;
});
