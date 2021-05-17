//DOM VARIABLES
const easContainerDiv = document.getElementById('easContainer');
const resolutionInput = document.getElementById('resolution'); //slider
const resolutionValueSpan = document.getElementById('resolutionValue'); //resolution display
const buttons = document.querySelectorAll('.drawingTool');
const clearButton = document.getElementById('clear');

//run resolution function for intial page display with default slider value
resolution(resolutionInput.value);

// make dark drawing tool load by default
easContainerDiv.addEventListener('mouseover', darkColor);

//EVENT LISTENERS

//add click events to drawing tool buttons (dark, shade, and eraser buttons)
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
    easContainerDiv.removeEventListener('mouseover', shade);
    easContainerDiv.removeEventListener('mouseover', eraser);
  }
  if (e.target.id === 'shade') {
    easContainerDiv.addEventListener('mouseover', shade);
    easContainerDiv.removeEventListener('mouseover', eraser);
    easContainerDiv.removeEventListener('mouseover', darkColor);
  }
  if (e.target.id === 'eraser') {
    easContainerDiv.addEventListener('mouseover', eraser);
    easContainerDiv.removeEventListener('mouseover', darkColor);
    easContainerDiv.removeEventListener('mouseover', shade);
  }
}

function darkColor(e) {
  //if target is not the container div...only the squares
  if (e.target.id != 'easContainer') {
    e.target.style.backgroundColor = '#3d3d3d';
  }
}

function shade(e) {
  //if target is not the container div...only the squares
  if (e.target.id != 'easContainer') {
    //if no inline background color styles, add one
    if (e.target.style.backgroundColor === "") {
      e.target.style.backgroundColor = "rgb(210, 210, 210)";
      //once there is inline bg color style, decrement by 10 each time if mouse over event
    } else {
      //get middle, aka green rgb value with string split
      let backgroundColor = e.target.style.backgroundColor.split(', ');
      let rgb = Number(backgroundColor[1]);
      // lower rgb value by 10
      rgb-=10;
      e.target.style.backgroundColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
    }
  }
}

function eraser(e) {
  //if target is not the container div...only the squares
  if (e.target.id != 'easContainer') {
    e.target.style.backgroundColor = '';
  }
}

function clear() {
  const squares = document.querySelectorAll('.square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = '';
  }
}