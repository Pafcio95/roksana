let timeToGo = Math.floor(
  (new Date("2020-09-30 15:00").getTime() - new Date().getTime()) / 1000
);

setInterval(() => {
  document.querySelector(".timer").textContent = `${timeToGo} sekund`;
  timeToGo--;
}, 1000);
