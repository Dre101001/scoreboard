
let homeScore = 0
let guestScore = 0

let homeNum = document.getElementById("home-num")
let guestNum = document.getElementById("guest-num")

function addScoreHomeone() {
  homeScore += 1
  homeNum.textContent = homeScore
}

function addScoreHometwo() {
  homeScore += 2
  homeNum.textContent = homeScore
}

function addScoreHomethree() {
  homeScore += 3
  homeNum.textContent = homeScore
}

function addScoreGuestone() {
  guestScore += 1
  guestNum.textContent = guestScore
}

function addScoreGuesttwo() {
  guestScore += 2
  guestNum.textContent = guestScore
}

function addScoreGuestthree() {
  guestScore += 3
  guestNum.textContent = guestScore
}

function resetScore() {
  homeScore = 0
  guestScore = 0
  homeNum.textContent = 0
  guestNum.textContent = 0
}
