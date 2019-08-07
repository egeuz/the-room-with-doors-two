//RNG function
function rng(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Select the correct door at random
const correctDoorRNG = rng(1, 9);
const correctDoor = document.querySelector(`.door-${correctDoorRNG}`);
correctDoor.classList.add('correct-door');
correctDoor.href = "../room2.html";

//Taunting text array
const taunts = [
  "Whoopsie.",
  "That's a slippery one.",
  "You'll get it next time!",
  "Ah, almost.",
  "Believe in yourself!",
  "Maybe try another one?",
  "Ack!",
  "Oh no!",
  "Actually try this time."
];

const text = document.querySelector('#text-box p');
const doors = document.querySelectorAll('.door');

//Change textbox on hover
[...doors].forEach(function(door) {
  door.addEventListener('mouseenter', function(){
    let tauntRNG = rng(0, taunts.length-1);
    text.innerHTML = taunts[tauntRNG];
  });
});


