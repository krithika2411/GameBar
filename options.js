const options = document.querySelector(".options");
const gameOverElement = document.querySelector(".gameover");

const computerBtn = options.querySelector(".computer");
const friendBtn = options.querySelector(".friend");
const xBtn = options.querySelector(".x");
const oBtn = options.querySelector(".o");
const playBtn = options.querySelector(".play");

let OPPONENT;
const player = new Object();

computerBtn.addEventListener("click", function () {
  OPPONENT = "computer";

  switchActive(friendBtn, computerBtn);
});
friendBtn.addEventListener("click", function () {
  OPPONENT = "friend";

  switchActive(computerBtn, friendBtn);
});
xBtn.addEventListener("click", function () {
  player.man = "X";
  player.computer = "O";
  player.friend = "O";

  switchActive(oBtn, xBtn);
});
oBtn.addEventListener("click", function () {
  player.man = "O";
  player.computer = "X";
  player.friend = "X";

  switchActive(xBtn, oBtn);
});
playBtn.addEventListener("click", function () {
  if (!OPPONENT) {
    computerBtn.style.backgroundColor = "purple";
    friendBtn.style.backgroundColor = "purple";
    return;
  }

  if (!player.man) {
    oBtn.style.backgroundColor = "purple";
    xBtn.style.backgroundColor = "purple";
    return;
  }

  init(player, OPPONENT);
  options.classList.add("hide");
});

function switchActive(off, on) {
  off.classList.remove("active");
  on.classList.add("active");
}
