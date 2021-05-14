//DOM VARIABLES
const easContainerDiv = document.getElementById('easContainer');

//squares per side
const squaresPerSide = prompt('how many sqs per side?');

//update css grid with squares per side variable
easContainerDiv.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
easContainerDiv.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

//generate squares and add to container div
for (let i = 0; i < squaresPerSide**2; i++) {
  //create square and add class
  let squareDiv = document.createElement('div');
  squareDiv.classList.add('square');

  //append to container div
  easContainerDiv.appendChild(squareDiv);
}

//add event listener to entire container div
easContainerDiv.addEventListener('mouseover', changeColor);

function changeColor(e) {
  //if target is not the container div...only the squares
  if (e.target.id != 'easContainer')
  e.target.style.backgroundColor = 'teal';
}