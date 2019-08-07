//Initialization
const shapes = ["circle", "circle", "square", "square", "triangle", "triangle", "pentagon", "pentagon", "star", "star"];
shuffle(shapes);

//Shuffle algorithm
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
}

//Distribute shapes randomly behind doors
const backgroundImages = document.querySelectorAll('.matching-card a');
backgroundImages.forEach((image) => {
  image.parentNode.classList.add(shapes[0]);
  image.classList.add(shapes[0]);
  shapes.shift();
});

//Get the correct shape, add the next room link to it
const correctShape = shapes[0];
const correctLink = document.querySelector(`a.${shapes[0]}`);
correctLink.href = 'room3.html'

const doors = document.querySelectorAll('.door');
let openedDoors = [];

doors.forEach((door) => {
  door.addEventListener('click', (event) => {
    event.target.classList.add('open');
    openedDoors.push(event.target);
    if(openedDoors.length === 2) {
      const firstShape = openedDoors[0].parentNode.classList[2];
      const secondShape = openedDoors[1].parentNode.classList[2];
      if(firstShape !== secondShape) {
        openedDoors[0].classList.remove('open');
        openedDoors[1].classList.remove('open');
        openedDoors = [];
      } else {
        openedDoors = [];
      }
    }
  });
});



// //Handling interactions
// const doors = document.querySelectorAll('.door');
// let openedDoors = [];
// doors.forEach((door) => {
//   door.addEventListener('click', (event) => {
//     event.target.classList.add('open'); //Open door animation
//     openedDoors.push(event.target); //Track doors that are open;
//     console.log(openedDoors);

//     if(openedDoors.length === 2) {
//       const door1Shape = openedDoors[0].children[0].classList;
//       console.log(door1Shape);
//     }
//   });
// });

//Checking whether doors match
