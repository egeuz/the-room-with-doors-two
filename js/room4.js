function rng(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const correctDoorRNG = rng(1,9);
const correctDoor = document.querySelector(`.door-${correctDoorRNG}`);
correctDoor.href = "../refrain2.html";