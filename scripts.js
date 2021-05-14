//DOM VARIABLES
const easContainerDiv = document.getElementById('easContainer');
const resolutionInput = document.getElementById('resolution');
const clearButton = document.getElementById('clear');


//EVENT LISTENERS
//add event listener to entire container div for square color change when drawing
easContainerDiv.addEventListener('mouseover', changeColor);

// add mouseup event for resolution button slider
resolutionInput.addEventListener('mouseup', function(e) {
  //run resolution function with input range slider value
  resolution(e.target.value);
})


function resolution(dimension) {
  //clear out container div squares
  easContainerDiv.innerHTML = '';

  //update container div with css grid values from dimension
  easContainerDiv.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
  easContainerDiv.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;

  //generate squares and add to container div
  for (let i = 0; i < dimension**2; i++) {
    //create square and add class
    let squareDiv = document.createElement('div');
    squareDiv.classList.add('square');

    //append to container div
    easContainerDiv.appendChild(squareDiv);
  }
}

function changeColor(e) {
  //if target is not the container div...only the squares
  if (e.target.id != 'easContainer')
  // e.target.style.backgroundColor = 'teal';
  e.target.classList.add('squareChangeColor');
}