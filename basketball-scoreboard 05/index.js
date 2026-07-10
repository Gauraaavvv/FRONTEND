
let score = 0
let score2 = 0

function homeScore(points) {
  score += points;
  document.getElementById("home-score").textContent = score
}

function guestScore(points) {
  score2 += points;
  document.getElementById("guest-score").textContent = score2
}

function reset() {
  score = 0
  score2 = 0
  document.getElementById("home-score").textContent = score
  document.getElementById("guest-score").textContent = score2
}