let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeFoulEl = document.getElementById("home-foul-score");
let guestFoulEl = document.getElementById("guest-foul-score");

let countHome = 0;
let countGuest = 0;
let countFoulHome = 0;
let countFoulGuest = 0;

function addFoulHome() {
  countFoulHome += 1;
  homeFoulEl.textContent = countFoulHome;
}

function addFoulguest() {
  countFoulGuest += 1;
  guestFoulEl.textContent = countFoulGuest;
}

function addOneHome() {
  countHome += 1;
  homeScoreEl.textContent = countHome;
}

function addTwoHome() {
  countHome += 2;
  homeScoreEl.textContent = countHome;
}
function addThreeHome() {
  countHome += 3;
  homeScoreEl.textContent = countHome;
}

function addOneGuest() {
  countGuest += 1;
  guestScoreEl.textContent = countGuest;
}

function addTwoGuest() {
  countGuest += 2;
  guestScoreEl.textContent = countGuest;
}
function addThreeGuest() {
  countGuest += 3;
  guestScoreEl.textContent = countGuest;
}

function reset() {
  homeScoreEl.textContent = 0;
  homeFoulEl.textContent = 0;
  guestScoreEl.textContent = 0;
  guestFoulEl.textContent = 0;
  countHome = 0;
  countGuest = 0;
  countFoulHome = 0;
  countFoulGuest = 0;
  guestScoreEl.style.color = "#F94F6D";
  homeScoreEl.style.color = "#F94F6D";
}

function highlight() {
  if (countHome > countGuest) {
    homeScoreEl.style.color = "yellow";
    guestScoreEl.style.color = "#F94F6D";
  } else {
    guestScoreEl.style.color = "yellow";
    homeScoreEl.style.color = "#F94F6D";
  }
}
