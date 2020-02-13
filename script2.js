"use strict";
window.addEventListener("DOMContentLoaded", start);
function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

const queueSize = getNumberOfCustomers();

let counter = 0;
function start() {
  if (queueSize.length < 40) queueSize.unshift(counter++);
  // else {
  //   queueSize.unshift(counter++);
  //   queueSize.pop();
  // }
  console.log(queueSize);
  setTimeout(start, 600);
}
//function setHeight() {
//  for (let i = 0; i < queueSize.length; i++) {
//    let bar;

//    bar = document.querySelector(`#container > div:nth-child(${i + 1})`);
//    bar.style.setProperty("--height", queueSize[i]);
//  }
//  console.log(queueSize);
//  setTimeout(setHeight, 600);
//}

//setHeight();
