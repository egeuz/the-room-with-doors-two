//Initialization
const numbers = [1,2,3,4,5,6,7,8,9];
shuffle(numbers);
const correctCode = generateCode(4);
let enteredCode = "";


//Distribute numbers randomly to doors
const doorNumbers = document.querySelectorAll('#play-area .door .door-text');
doorNumbers.forEach((number) => {
  number.innerHTML = numbers[0];
  numbers.shift();
});

//Handle door interaction
const doors = document.querySelectorAll('#play-area .door');
doors.forEach((door) => {
  door.addEventListener('click', (event) => {
    event.preventDefault();
    let doorNumber = event.target.querySelector('.door-text').innerHTML;

    enteredCode += doorNumber;
    if(enteredCode.length > 4) {
      enteredCode = enteredCode.slice(1);
    }

    console.log(enteredCode);

    if(enteredCode === correctCode) {
      window.location.href = '../room4.html';
    }
  });
});

//Negafrog Modal Functionality
const secretDoor = document.querySelector('.secret-door');
const negafrogModal = document.getElementById('negafrog-modal');
const modalCloseButton = document.getElementById('close-button');
secretDoor.addEventListener('click', (event) => {
  negafrogModal.classList.add('open');
  console.log("The correct sequence is: " + correctCode);
});

modalCloseButton.addEventListener('click', () => {
  negafrogModal.classList.remove('open');
});


/*** METHODS ***/
//Shuffle method
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
}

//RNG method
function rng(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Code generation method
function generateCode(size) {
  let code = "";
  for (let i=0; i<size; i++) {
    code += `${rng(1,9)}`
  } 
  return code;
}

