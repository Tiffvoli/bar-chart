"use strict";
//window.addEventListener("DOMContentLoaded", getNumberOfCustomers);

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

const queueSize = getNumberOfCustomers();
console.log(queueSize);
function setHeight() {
  document.querySelectorAll(".bar").forEach((bar, i) => {
    bar.style.setProperty("--height", queueSize[i]);
  });

  for (let i = 0; i < queueSize.length; i++) {
    let bar;

    bar = document.querySelector(`#container > div:nth-child(${i + 1})`);
    bar.style.setProperty("--height", queueSize[i]);
  }
  console.log(queueSize);
  setTimeout(setHeight, 600);
}

setHeight();
