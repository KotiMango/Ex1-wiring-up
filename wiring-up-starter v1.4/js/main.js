"use strict";
var gIsMark = false;
var gElHeadLineSpan = document.querySelector("h2 span");
console.dir(gElHeadLineSpan);
function init() {
  // TODO: change the h1 txt
  var elHeadLine = document.querySelector("h1");
  setTimeout(function () {
    elHeadLine.innerText = "I Love JS";
  }, 3000);
}
function toggleClassArr(classname, arr) {
  for (var i = 0; i < arr.length; i++) {
    var currEl = arr[i];
    currEl.classList.toggle(classname);
  }
}
function mark(elBtn) {
  var elSpansP = document.querySelectorAll("p span");
  if (elBtn.classList.contains("clicked")) {
    elBtn.classList.remove("clicked");
    gIsMark = false;
    toggleClassArr("mark", elSpansP);
    elBtn.innerText = "Mark";
    gElHeadLineSpan.innerText = "";
  } else {
    elBtn.classList.add("clicked");
    gIsMark = true;
    toggleClassArr("mark", elSpansP);
    elBtn.innerText = "Un-Mark";
  }
  // TODO: change text in the button
  // TODO: mark all spans inside .box
}

function whenMouseOnImg(elImg) {
  console.log(elImg);
  elImg.src = "img/ca.png";
  // TODO: change the image
}

function whenMouseOutImg(elImg) {
  elImg.src = "img/ninja.png";
  // TODO: change the image
}

function changeSubHeader(elSpan) {
  var elSpanInnerText = elSpan.innerText;
  if (elSpan.classList.contains("mark")) {
    gElHeadLineSpan.innerHTML = elSpanInnerText;
  } else {
    gElHeadLineSpan.innerHTML = "";
  }
  // TODO: change the text in the span inside the h2
}

function handleKey(ev) {
  // TODO: close the modal if escape is pressed
  var elKey = ev.key;
  console.log(ev);
  if (elKey === "Escape") closeModal();
}

function openModal() {
  // Todo: show the modal and schedule its closing
}
function closeModal() {
  var elModal = document.querySelector(".modal");
  elModal.style.display = "none";
  // Todo: hide the modal
}

function bless() {
  var today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var elModal = document.querySelector(".modal");
  var elModalText = document.querySelector(".modal h2");
  elModalText.innerHTML = `You were blessed at ${time}`;
  elModalText.style.color = getRandomColor();
  elModal.style.display = "block";
  setTimeout(function () {
    elModal.style.display = "none";
  }, 5000);
  // Todo: update the modal content and use openModal
}

function getTime() {
  return new Date().toString().split(" ")[4];
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
