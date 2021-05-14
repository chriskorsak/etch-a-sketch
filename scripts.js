//DOM VARIABLES
const easContainerDiv = document.getElementById('easContainer');
const resolutionInput = document.getElementById('resolution');
const resolutionValueSpan = document.getElementById('resolutionValue');
const buttons = document.querySelectorAll('.drawingTool');
const clearButton = document.getElementById('clear');

//run resolution function for intial page display with default slider value
resolution(resolutionInput.value);

easContainerDiv.addEventListener('mouseover', darkColor);

//EVENT LISTENERS

//add click events to drawing tool buttons (not clear button)
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', drawingTool);
}

// add touchup event for resolution slider (mobile/touch devices)
resolutionInput.addEventListener('touchend', function(e) {
  //run resolution function with input range slider value
  resolution(e.target.value);
  //update resolution value span readout
  resolutionValueSpan.textContent = e.target.value;
})

// add mouseup event for resolution slider (desktop)
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

function drawingTool(e) {
  // remove button clicked css class to all buttons
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('buttonClicked');
  }
  // add button clicked css class to target button
  e.target.classList.add('buttonClicked');

  if (e.target.id === 'dark') {
    //add event listener to entire container div for square color change when drawing
    easContainerDiv.addEventListener('mouseover', darkColor);
    easContainerDiv.removeEventListener('mouseover', eraser);
  }
  if (e.target.id === 'eraser') {
    //add event listener to entire container div for square color change when drawing
    easContainerDiv.addEventListener('mouseover', eraser);
    easContainerDiv.removeEventListener('mouseover', darkColor);
  }
}

function darkColor(e) {
  //if target is not the container div...only the squares
  if (e.target.id != 'easContainer') {
    e.target.classList.add('squareDarkColor');
  }
}

function eraser(e) {
  //if target is not the container div...only the squares
  if (e.target.id != 'easContainer') {
    e.target.classList.remove('squareDarkColor');
  }
}

function clear() {
  //get all colored squares
  const coloredSquares = document.querySelectorAll('.squareDarkColor');
  for (let i = 0; i < coloredSquares.length; i++) {
    //remove colored box class
    coloredSquares[i].classList.remove('squareDarkColor');
  }
}