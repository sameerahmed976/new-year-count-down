const day = document.querySelector(".days");
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
const nextYear = document.querySelector(".next-year");

const timer = setInterval(() => {
  const date = new Date();
  const currentYear = date.getFullYear();
  nextYear.innerHTML = `${currentYear + 1}`;

  hour.innerHTML = date.getHours();
  minute.innerHTML = date.getMinutes();
  second.innerHTML = date.getSeconds();
}, 1000);
