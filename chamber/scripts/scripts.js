const copyrightyear = document.querySelector("#copyrightyear");
// const options = {
//   weekday: "long",
//   day: "numeric",
//   month: "long",
//   year: "numeric",
// };
// const currentDate = new Date();

// document.querySelector("#datetime").textContent = currentDate.toLocaleString(
//   "en-US",
//   options
// );

const daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.querySelector("#datetime").textContent = fulldate;

copyrightyear.textContent = `${new Date().getFullYear()}`;
document.getElementById("lastmod").textContent = document.lastModified;

function toggleMenu() {
  document.getElementById("main-nav").classList.toggle("open");
  document.getElementById("menu-button").classList.toggle("open");
}

const x = document.getElementById("menu-button");

x.onclick = toggleMenu;

let day = d.getDay();

if (day == 2 || day == 3) {
  let banner = document.querySelector(".banner-container");
  banner.style.display = "block";

  document
    .querySelector(".banner-close")
    .addEventListener("click", function () {
      this.closest(".banner-container").style.display = "none";
    });
} else {
  let banner = document.querySelector(".banner-container");
  banner.style.display = "none";
}
