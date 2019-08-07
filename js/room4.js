function rng(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const correctDoorRNG = rng(1,9);
const correctDoor = document.querySelector(`.door-${correctDoorRNG}`);
correctDoor.href = "https://egeuz.github.io/the-room-with-doors-two/refrain2.html";