//DOM VARIABLES
const easContainerDiv = document.getElementById('easContainer');

//eascontainerDiv width calculated from css width
const containerWidth = easContainerDiv.offsetWidth;

//squares per side
const squaresPerSide = 3;

//width of each square
const squareWidth = Math.floor(containerWidth / squaresPerSide);

//generate squares and add to container
for (let i = 0; i < squaresPerSide**2; i++) {
  //create square and add class
  let squareDiv = document.createElement('div');
  squareDiv.classList.add('square');
  //specify square width and height
  squareDiv.style.width = `${squareWidth}px`;
  squareDiv.style.height = `${squareWidth}px`;

  //append to container div
  easContainerDiv.appendChild(squareDiv);
}