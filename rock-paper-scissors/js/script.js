"use strict";

let secretNumber = Math.trunc(Math.random() * 3) + 1;
let value = 0;

document.querySelector(".rock").addEventListener("click", function () {
  document.querySelector(".player__answer--hidden").textContent = "Rock";
  value = 1;
});
document.querySelector(".paper").addEventListener("click", function () {
  document.querySelector(".player__answer--hidden").textContent = "Paper";
  value = 2;
});
document.querySelector(".scissor").addEventListener("click", function () {
  document.querySelector(".player__answer--hidden").textContent = "Scissors";
  value = 3;
});

document.querySelector(".submit").addEventListener("click", function () {
  if (secretNumber === 1) {
    document.querySelector(".cpu__answer--hidden").textContent = "Rock";
    document.querySelector(".rock--hidden").style.display = "block";
  } else if (secretNumber === 2) {
    document.querySelector(".cpu__answer--hidden").textContent = "Paper";
    document.querySelector(".paper--hidden").style.display = "block";
  } else if (secretNumber === 3) {
    document.querySelector(".cpu__answer--hidden").textContent = "Scissors";
    document.querySelector(".scissor--hidden").style.display = "block";
  }
  if (value === secretNumber) {
    document.querySelector(".winner").textContent = "It's a tie!!!";
    document.querySelector("body").style.backgroundColor = "#fff3bf";
    document.querySelector(".submit").disabled = true;
    if (value === 1) {
      document.querySelector(".paper__cover").style.display = "block";
      document.querySelector(".paper__cover").style.backgroundColor = "#fff3bf";
      document.querySelector(".scissor__cover").style.display = "block";
      document.querySelector(".scissor__cover").style.backgroundColor =
        "#fff3bf";
    } else if (value === 2) {
      document.querySelector(".rock__cover").style.display = "block";
      document.querySelector(".rock__cover").style.backgroundColor = "#fff3bf";
      document.querySelector(".scissor__cover").style.display = "block";
      document.querySelector(".scissor__cover").style.backgroundColor =
        "#fff3bf";
    } else if (value === 3) {
      document.querySelector(".rock__cover").style.display = "block";
      document.querySelector(".rock__cover").style.backgroundColor = "#fff3bf";
      document.querySelector(".paper__cover").style.display = "block";
      document.querySelector(".paper__cover").style.backgroundColor = "#fff3bf";
    }
  } else if (value !== secretNumber) {
    if (value === 1 && secretNumber === 2) {
      document.querySelector(".winner").textContent = "CPU Wins!!!";
      document.querySelector("body").style.backgroundColor = "#fa5252";
      document.querySelector(".submit").disabled = true;
      document.querySelector(".paper__cover").style.display = "block";
      document.querySelector(".paper__cover").style.backgroundColor = "#fa5252";
      document.querySelector(".scissor__cover").style.display = "block";
      document.querySelector(".scissor__cover").style.backgroundColor =
        "#fa5252";
    } else if (value === 1 && secretNumber === 3) {
      document.querySelector(".winner").textContent = "Player Wins!!!";
      document.querySelector("body").style.backgroundColor = "#51cf66";
      document.querySelector(".submit").disabled = true;
      document.querySelector(".paper__cover").style.display = "block";
      document.querySelector(".paper__cover").style.backgroundColor = "#51cf66";
      document.querySelector(".scissor__cover").style.display = "block";
      document.querySelector(".scissor__cover").style.backgroundColor =
        "#51cf66";
    } else if (value === 2 && secretNumber === 1) {
      document.querySelector(".winner").textContent = "Player Wins!!!";
      document.querySelector("body").style.backgroundColor = "#51cf66";
      document.querySelector(".submit").disabled = true;
      document.querySelector(".rock__cover").style.display = "block";
      document.querySelector(".rock__cover").style.backgroundColor = "#51cf66";
      document.querySelector(".scissor__cover").style.display = "block";
      document.querySelector(".scissor__cover").style.backgroundColor =
        "#51cf66";
    } else if (value === 2 && secretNumber === 3) {
      document.querySelector(".winner").textContent = "CPU Wins!!!";
      document.querySelector("body").style.backgroundColor = "#fa5252";
      document.querySelector(".submit").disabled = true;
      document.querySelector(".rock__cover").style.display = "block";
      document.querySelector(".rock__cover").style.backgroundColor = "#fa5252";
      document.querySelector(".scissor__cover").style.display = "block";
      document.querySelector(".scissor__cover").style.backgroundColor =
        "#fa5252";
    } else if (value === 3 && secretNumber === 1) {
      document.querySelector(".winner").textContent = "CPU Wins!!!";
      document.querySelector("body").style.backgroundColor = "#fa5252";
      document.querySelector(".submit").disabled = true;
      document.querySelector(".rock__cover").style.display = "block";
      document.querySelector(".rock__cover").style.backgroundColor = "#fa5252";
      document.querySelector(".paper__cover").style.display = "block";
      document.querySelector(".paper__cover").style.backgroundColor = "#fa5252";
    } else if (value === 3 && secretNumber === 2) {
      document.querySelector(".winner").textContent = "Player Wins!!!";
      document.querySelector("body").style.backgroundColor = "#51cf66";
      document.querySelector(".submit").disabled = true;
      document.querySelector(".rock__cover").style.display = "block";
      document.querySelector(".rock__cover").style.backgroundColor = "#51cf66";
      document.querySelector(".paper__cover").style.display = "block";
      document.querySelector(".paper__cover").style.backgroundColor = "#51cf66";
    } else if (value === 0) {
      alert("Pick either Rock, Paper, or Scissors before submitting!");
      document.querySelector(".submit").disabled = true;
      document.querySelector(".player__answer--hidden").textContent =
        "Press Play Again!!!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  value = 0;
  secretNumber = Math.trunc(Math.random() * 3) + 1;
  document.querySelector("body").style.backgroundColor = "#339af0";
  document.querySelector(".player__answer--hidden").textContent = "";
  document.querySelector(".cpu__answer--hidden").textContent = "";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".rock--hidden").style.display = "none";
  document.querySelector(".paper--hidden").style.display = "none";
  document.querySelector(".scissor--hidden").style.display = "none";
  document.querySelector(".submit").disabled = false;
  document.querySelector(".rock__cover").style.display = "none";
  document.querySelector(".paper__cover").style.display = "none";
  document.querySelector(".scissor__cover").style.display = "none";
});
