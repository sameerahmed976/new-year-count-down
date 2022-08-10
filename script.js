const day = document.querySelector(".days");
const hour = document.querySelector(".hours");
const minute = document.querySelector(".minutes");
const second = document.querySelector(".seconds");
const nextYear = document.querySelector(".next-year");
const background = document.querySelector(".background");

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
nextYear.innerHTML = currentYear + 1;

function updateCountdownTimer() {
  const currentTime = new Date();
  const differenceTime = newYearTime - currentTime;
  // console.log(
  //   "🚀 ~ file: script.js ~ line 14 ~ updateCountdownTimer ~ differenceTime",
  //   differenceTime
  // );

  let d = Math.floor(differenceTime / 1000 / 60 / 60 / 24);
  // console.log(d);
  let h = Math.floor(differenceTime / 1000 / 60 / 60) % 24;
  // console.log("🚀 ~ file: script.js ~ line 22 ~ updateCountdownTimer ~ h", h);
  let m = Math.floor(differenceTime / 1000 / 60) % 60;
  // console.log("🚀 ~ file: script.js ~ line 24 ~ updateCountdownTimer ~ m", m);

  let s = Math.floor(differenceTime / 1000) % 60;
  // console.log("🚀 ~ file: script.js ~ line 27 ~ updateCountdownTimer ~ s", s);

  day.innerHTML = d;

  function padding(p) {
    return p < 10 ? `0${p}` : p;
  }

  hour.innerHTML = padding(h);
  minute.innerHTML = padding(m);
  second.innerHTML = padding(s);
}

const timer = setInterval(() => {
  updateCountdownTimer();
}, 1000);

setTimeout(() => {
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
  background.style.display = "block";
}, 1000);
