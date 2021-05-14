//DOM VARIABLES
const easContainerDiv = document.getElementById('easContainer');
const resolutionInput = document.getElementById('resolution');
const resolutionValueSpan = document.getElementById('resolutionValue');
const clearButton = document.getElementById('clear');

//run resolution function for intial page display with default slider value
resolution(resolutionInput.value);


//EVENT LISTENERS
// //add event listener to entire container div for square color change when drawing
// easContainerDiv.addEventListener('touchend', changeColor);
//add event listener to entire container div for square color change when drawing
easContainerDiv.addEventListener('mouseover', changeColor);

// add touchup event for resolution button slider (mobile/touch devices)
resolutionInput.addEventListener('touchend', function(e) {
  //run resolution function with input range slider value
  resolution(e.target.value);
  //update resolution value span readout
  resolutionValueSpan.textContent = e.target.value;
})

// add mouseup event for resolution button slider (desktop)
resolutionInput.addEventListener('mouseup', function(e) {
  //run resolution function with input range slider value
  resolution(e.target.value);
  //update resolution value span readout
  resolutionValueSpan.textContent = e.target.value;
})

// add click event when clearing etch a sketch
clearButton.addEventListener('click', clear);


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

function clear() {
  //get all colored squares
  const coloredSquares = document.querySelectorAll('.squareChangeColor');
  for (let i = 0; i < coloredSquares.length; i++) {
    //remove colored box class
    coloredSquares[i].classList.remove('squareChangeColor');
  }
}